# Shopify Theme Installation Guide

This guide will help you install and set up the SeasonTrend Shopify Liquid theme on your Shopify store.

## ✅ Prerequisites

Before you begin, make sure you have:
- A Shopify store (you can create one at https://www.shopify.com)
- Access to your Shopify admin panel
- Basic understanding of Shopify themes (optional but helpful)

## 🚀 Installation Methods

### Method 1: Shopify CLI (Recommended for Developers)

The Shopify CLI provides the fastest way to upload and work with themes.

#### Step 1: Install Shopify CLI

```bash
# Install via npm
npm install -g @shopify/cli @shopify/theme
```

#### Step 2: Clone the Repository

```bash
git clone https://github.com/noor-87dsdp-beep/seasontrend.us.git
cd seasontrend.us
```

#### Step 3: Login to Your Store

```bash
shopify login --store your-store.myshopify.com
```

You'll be prompted to authenticate via your browser.

#### Step 4: Push the Theme

```bash
# Push as a new unpublished theme
shopify theme push --unpublished

# Or push and publish immediately
shopify theme push --unpublished --publish
```

#### Step 5: Customize Your Theme

After pushing, you can:
- Go to your Shopify admin → Online Store → Themes
- Click "Customize" on the SeasonTrend theme
- Or use `shopify theme dev` for live development

### Method 2: Manual Upload via Shopify Admin

If you prefer not to use the CLI, you can manually upload the theme.

#### Step 1: Download the Theme

Download the repository as a ZIP file or clone it:
```bash
git clone https://github.com/noor-87dsdp-beep/seasontrend.us.git
cd seasontrend.us
```

#### Step 2: Create a Theme ZIP

**Important**: You need to zip the theme contents, not the repository folder.

On macOS/Linux:
```bash
zip -r seasontrend-theme.zip assets config layout locales sections snippets templates theme.json
```

On Windows (PowerShell):
```powershell
Compress-Archive -Path assets,config,layout,locales,sections,snippets,templates,theme.json -DestinationPath seasontrend-theme.zip
```

#### Step 3: Upload to Shopify

1. Log in to your Shopify admin
2. Go to **Online Store** → **Themes**
3. Click **Add theme** (or **Upload zip file**)
4. Select your `seasontrend-theme.zip` file
5. Wait for the upload to complete

#### Step 4: Preview and Publish

1. Once uploaded, click **Actions** → **Preview** to see your theme
2. When ready, click **Publish** to make it live

## 🎨 Theme Customization

### Access Theme Editor

1. Go to **Online Store** → **Themes**
2. Find SeasonTrend theme
3. Click **Customize**

### Available Customization Options

#### Colors
- Primary Color (default: #6366f1)
- Secondary Color (default: #8b5cf6)
- Accent Color (default: #ec4899)
- Text Color (default: #1f2937)
- Background Color (default: #ffffff)

#### Typography
- Heading Font (Playfair Display, Georgia, Times New Roman)
- Body Font (Inter, Arial, Helvetica)

#### Logo
- Upload your logo image
- Set logo width (50-300px)

#### Social Media
- Add Facebook, Instagram, Twitter, Pinterest URLs

#### Cart Settings
- Enable/disable cart notes
- Choose cart type (drawer or page)

#### Product Settings
- Show/hide product vendor
- Show/hide product SKU
- Enable/disable image zoom

### Customizing Sections

The theme uses dynamic sections that can be customized:

1. **Header Section**
   - Announcement text
   - Logo
   - Navigation menu

2. **Hero Section**
   - Subtitle, title, description
   - Call-to-action buttons
   - Statistics

3. **Featured Products**
   - Select collection
   - Number of products to show
   - View all button

4. **Categories**
   - Add/remove categories
   - Set category images and icons
   - Link to collections

5. **Testimonials**
   - Add customer reviews
   - Set ratings
   - Upload customer photos

6. **Newsletter**
   - Customize text and description
   - Integration with Mailchimp/Klaviyo

7. **Footer**
   - Add menu columns
   - Contact information
   - Social media links

## 📦 Adding Content

### Add Products

1. Go to **Products** → **Add product**
2. Fill in product details:
   - Title
   - Description
   - Price
   - Images (recommended: 1200x1200px)
   - Inventory
3. Click **Save**

### Create Collections

1. Go to **Products** → **Collections**
2. Click **Create collection**
3. Set collection title and description
4. Add products manually or by conditions
5. Click **Save**

### Add Pages

1. Go to **Online Store** → **Pages**
2. Click **Add page**
3. Create pages for:
   - About Us
   - Contact
   - Privacy Policy
   - Terms of Service
   - Refund Policy
4. Click **Save**

### Configure Navigation

1. Go to **Online Store** → **Navigation**
2. Edit **Main menu**:
   - Add links to collections
   - Add links to pages
   - Organize menu structure
3. Click **Save menu**

## 🔧 Advanced Configuration

### Set Up Domain

1. Go to **Settings** → **Domains**
2. Click **Connect existing domain**
3. Follow instructions to update DNS records
4. Wait for DNS propagation (up to 48 hours)

### Configure Payments

1. Go to **Settings** → **Payments**
2. Enable Shopify Payments or third-party providers
3. Set up:
   - PayPal
   - Apple Pay
   - Google Pay
   - Shop Pay

### Set Up Shipping

1. Go to **Settings** → **Shipping and delivery**
2. Configure shipping zones
3. Set shipping rates
4. Enable free shipping over $50 (as advertised in theme)

### Configure Taxes

1. Go to **Settings** → **Taxes and duties**
2. Enable automatic tax calculation
3. Set tax rates for your regions

### Add Legal Pages

1. Go to **Settings** → **Legal**
2. Use Shopify's policy generator or create custom policies:
   - Privacy policy
   - Terms of service
   - Refund policy
   - Shipping policy

## 📧 Email Marketing Integration

### Shopify Email (Built-in)

1. Install Shopify Email app
2. Create email campaigns
3. Set up automated flows

### Mailchimp Integration

1. Install Mailchimp app from Shopify App Store
2. Connect your Mailchimp account
3. Update newsletter section with Mailchimp form action URL

### Klaviyo Integration

1. Install Klaviyo app from Shopify App Store
2. Configure signup forms
3. Create automated welcome flow

## 📊 Analytics Setup

### Google Analytics

1. Go to **Online Store** → **Preferences**
2. Scroll to **Google Analytics**
3. Add your GA4 tracking code
4. Enable enhanced e-commerce tracking

### Facebook Pixel

1. Go to **Online Store** → **Preferences**
2. Scroll to **Facebook Pixel**
3. Add your Pixel ID
4. Enable conversion tracking

## ✅ Pre-Launch Checklist

Before launching your store, verify:

- [ ] Theme is customized with your branding
- [ ] Logo is uploaded
- [ ] Colors match your brand
- [ ] Products are added with images and descriptions
- [ ] Collections are created and organized
- [ ] Navigation menu is set up
- [ ] Legal pages are created (Privacy, Terms, Refund)
- [ ] Shipping rates are configured
- [ ] Payment methods are enabled
- [ ] Domain is connected (or using .myshopify.com)
- [ ] Test order completed successfully
- [ ] Mobile responsiveness tested
- [ ] All links are working
- [ ] SEO settings configured
- [ ] Analytics tracking is set up

## 🐛 Troubleshooting

### Theme Won't Upload

**Issue**: ZIP file rejected during upload

**Solution**: 
- Ensure you're zipping the theme contents, not the folder
- Don't include `.git`, `node_modules`, or other non-theme files
- Maximum file size is 50MB

### Images Not Showing

**Issue**: Product or section images not displaying

**Solution**:
- Check image file formats (JPG, PNG, GIF, WebP supported)
- Ensure images are uploaded to Shopify, not external URLs
- Check image paths in Liquid code

### Sections Not Appearing

**Issue**: Homepage sections not visible

**Solution**:
- Go to Customize theme
- Check if sections are added to the homepage
- Ensure sections have content (products, blocks, etc.)

### Liquid Errors

**Issue**: Liquid syntax errors in theme

**Solution**:
- Check theme code for typos
- Review Shopify's Liquid documentation
- Use `shopify theme check` command to validate

## 📞 Support

Need help? Here's how to get support:

- **Documentation**: Check SHOPIFY_INTEGRATION.md
- **Shopify Help**: https://help.shopify.com
- **Theme Issues**: Open an issue on GitHub
- **Community**: Shopify Community Forums

## 🎉 Next Steps

After installation:

1. **Customize your theme** to match your brand
2. **Add products** from your suppliers
3. **Set up marketing** (email, social media)
4. **Launch your store** and start selling!
5. **Monitor analytics** and optimize for conversions

---

**Happy Selling! 🚀**

Visit us at: [https://seasontrend.us](https://seasontrend.us)
