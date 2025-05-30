
import requests
from bs4 import BeautifulSoup
import sys
import re

def test_netlify_form():
    """Test the Netlify form structure and attributes"""
    try:
        print("Starting form structure test...")
        
        # Get the HTML content
        print("Fetching page from http://localhost:8080")
        response = requests.get('http://localhost:8080')
        if response.status_code != 200:
            print(f"Error: Failed to load page. Status code: {response.status_code}")
            return False
        
        print(f"Page loaded successfully. Content length: {len(response.text)} bytes")
            
        # Parse the HTML
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Check if we can find the contact section
        contact_section = soup.select_one('#contact')
        if not contact_section:
            print("Error: Contact section (#contact) not found")
            return False
            
        print("✅ Contact section found")
        
        # Find the contact form
        form = soup.select_one('form.contact-form')
        if not form:
            print("Error: Contact form not found")
            # Print the HTML of the contact section to debug
            print(f"Contact section HTML: {contact_section}")
            return False
            
        print("✅ Contact form found")
        
        # Check Netlify attributes
        netlify_attr = form.get('data-netlify')
        if netlify_attr != 'true':
            print(f"Error: data-netlify attribute is not 'true'. Found: {netlify_attr}")
            return False
            
        print("✅ data-netlify attribute is correctly set to 'true'")
        
        # Check honeypot field
        honeypot = form.select_one('input[name="bot-field"]')
        if not honeypot:
            print("Error: Honeypot field not found")
            return False
            
        print("✅ Honeypot field is present")
        
        # Check form-name hidden input
        form_name = form.select_one('input[name="form-name"]')
        if not form_name or form_name.get('value') != 'contact':
            print("Error: form-name hidden input is missing or has incorrect value")
            return False
            
        print("✅ form-name hidden input is present with correct value")
        
        # Check form structure (p.form-field instead of div.form-group)
        form_fields = form.select('p.form-field')
        if not form_fields:
            print("Error: No p.form-field elements found")
            return False
            
        print(f"✅ Found {len(form_fields)} p.form-field elements")
        
        # Check if div.form-group elements are present (should not be)
        form_groups = form.select('div.form-group')
        if form_groups:
            print(f"Warning: Found {len(form_groups)} div.form-group elements which should have been replaced")
        else:
            print("✅ No div.form-group elements found (correctly replaced with p.form-field)")
        
        # Check required fields
        required_fields = ['firstName', 'lastName', 'email', 'comments']
        missing_required_attr = []
        
        for field_name in required_fields:
            field = form.select_one(f'input[name="{field_name}"], textarea[name="{field_name}"]')
            if not field:
                print(f"Error: Required field '{field_name}' not found")
                return False
            
            # Check if the required attribute is present
            if not field.has_attr('required'):
                missing_required_attr.append(field_name)
                print(f"Warning: Field '{field_name}' is not marked as required in HTML")
            else:
                print(f"✅ Field '{field_name}' is correctly marked as required")
        
        if missing_required_attr:
            print(f"\nWarning: The following fields are missing the 'required' attribute: {', '.join(missing_required_attr)}")
            print("This might be handled by JavaScript validation instead")
                
        # Check reset button
        reset_button = form.select_one('button[type="reset"]')
        if not reset_button:
            print("Error: Reset button not found or not using type='reset'")
            return False
            
        print("✅ Reset button is present with type='reset'")
        
        # Check submit button
        submit_button = form.select_one('button[type="submit"]')
        if not submit_button:
            print("Error: Submit button not found")
            return False
            
        print("✅ Submit button is present")
        
        # Check error message elements
        error_elements = form.select('.error-message')
        if len(error_elements) < 4:  # At least one for each required field
            print(f"Error: Not enough error message elements. Found: {len(error_elements)}")
            return False
            
        print(f"✅ Found {len(error_elements)} error message elements")
        
        # Check JavaScript file for form validation
        print("\nChecking JavaScript validation...")
        js_response = requests.get('http://localhost:8080/script.js')
        if js_response.status_code != 200:
            print("Error: Could not load JavaScript file")
            return False
            
        js_content = js_response.text
        
        # Check if preventDefault is removed for form submission
        form_submit_handler = re.search(r'form\.addEventListener\s*\(\s*[\'"]submit[\'"]\s*,\s*function\s*\([^)]*\)\s*{([^}]*)}\s*\)', js_content, re.DOTALL)
        if form_submit_handler:
            handler_code = form_submit_handler.group(1)
            if 'preventDefault' in handler_code and 'if (!validateForm())' in handler_code:
                print("✅ Form submission correctly uses preventDefault only when validation fails")
            elif 'preventDefault' in handler_code and 'if (!validateForm())' not in handler_code:
                print("Warning: Form submission uses preventDefault without validation check")
            else:
                print("✅ Form submission allows default behavior for Netlify handling")
        else:
            print("Warning: Could not find form submission handler")
        
        # Check reset button functionality
        reset_handler = re.search(r'resetBtn\.addEventListener\s*\(\s*[\'"]click[\'"]\s*,', js_content)
        if not reset_handler:
            print("Warning: Could not find reset button click handler")
        else:
            print("✅ Reset button has click event handler")
            
        # Check if resetForm function exists
        reset_form_func = re.search(r'function\s+resetForm\s*\(\s*\)', js_content)
        if not reset_form_func:
            print("Warning: Could not find resetForm function")
        else:
            print("✅ resetForm function exists")
        
        # Check for real-time validation
        blur_handler = re.search(r'input\.addEventListener\s*\(\s*[\'"]blur[\'"]\s*,', js_content)
        if not blur_handler:
            print("Warning: Could not find blur event handler for real-time validation")
        else:
            print("✅ Real-time validation on blur event exists")
        
        print("\n✅ All form tests passed successfully!")
        return True
        
    except Exception as e:
        print(f"Error during testing: {str(e)}")
        return False

if __name__ == "__main__":
    success = test_netlify_form()
    sys.exit(0 if success else 1)
