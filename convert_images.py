import base64
import re

# Read images
with open('src/assets/images/logos/logo_circle.png', 'rb') as f:
    logo_b64 = base64.b64encode(f.read()).decode()

with open('src/assets/images/logos/PC_QR.png', 'rb') as f:
    qr_b64 = base64.b64encode(f.read()).decode()

# Create data URLs
logo_url = f'data:image/png;base64,{logo_b64}'
qr_url = f'data:image/png;base64,{qr_b64}'

# Read the HTML file
with open('business-card-final.html', 'r') as f:
    html = f.read()

# Replace image sources
html = html.replace('src="src/assets/images/logos/logo_circle.png"', f'src="{logo_url}"')
html = html.replace('src="src/assets/images/logos/PC_QR.png"', f'src="{qr_url}"')

# Write back
with open('business-card-final.html', 'w') as f:
    f.write(html)

print("Images embedded successfully!")
