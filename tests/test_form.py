
import requests
from bs4 import BeautifulSoup
import sys

def test_netlify_form():
    """Test the Netlify form structure and attributes"""
    try:
        # Get the HTML content
        response = requests.get('http://localhost:8080')
        if response.status_code != 200:
            print(f"Error: Failed to load page. Status code: {response.status_code}")
            return False
            
        # Parse the HTML
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find the contact form
        form = soup.select_one('form.contact-form')
        if not form:
            print("Error: Contact form not found")
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
        
        # Check required fields
        required_fields = ['firstName', 'lastName', 'email', 'comments']
        for field_name in required_fields:
            field = form.select_one(f'input[name="{field_name}"], textarea[name="{field_name}"]')
            if not field:
                print(f"Error: Required field '{field_name}' not found")
                return False
            if not field.get('required'):
                print(f"Error: Field '{field_name}' is not marked as required")
                return False
                
        print("✅ All required fields are present and marked as required")
        
        # Check reset button
        reset_button = form.select_one('button[type="reset"]')
        if not reset_button:
            print("Error: Reset button not found")
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
        
        print("\n✅ All form tests passed successfully!")
        return True
        
    except Exception as e:
        print(f"Error during testing: {str(e)}")
        return False

if __name__ == "__main__":
    success = test_netlify_form()
    sys.exit(0 if success else 1)
