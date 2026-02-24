import base64

# Read images
with open('src/assets/images/logos/logo_circle.png', 'rb') as f:
    logo_b64 = base64.b64encode(f.read()).decode()

with open('src/assets/images/logos/PC_QR.png', 'rb') as f:
    qr_b64 = base64.b64encode(f.read()).decode()

# Write to files so we can use them
with open('logo_data_url.txt', 'w') as f:
    f.write(f'data:image/png;base64,{logo_b64}')

with open('qr_data_url.txt', 'w') as f:
    f.write(f'data:image/png;base64,{qr_b64}')

print("Data URLs generated successfully")
print(f"Logo data URL length: {len(logo_b64)}")
print(f"QR data URL length: {len(qr_b64)}")
