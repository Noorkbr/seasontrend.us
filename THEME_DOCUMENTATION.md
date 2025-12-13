# SeasonTrend Arctic Neo-Luxury Theme Documentation

## Quick Start Guide for Merchants

This guide explains how to customize the SeasonTrend theme using the Shopify Theme Editor.

---

## Accessing the Theme Editor

1. Log in to your Shopify admin
2. Go to **Online Store** > **Themes**
3. Click **Customize** on your active theme

---

## Key Sections to Customize

### 1. Header
**Location:** Theme Editor > Header section

#### What you can customize:
- **Logo**: Upload your brand logo and set the display width
- **Navigation**: Links are pulled from your Navigation settings (Online Store > Navigation)
- **Announcement Bar**: Add rotating messages (Free Shipping, Sales, etc.)
- **CTA Button**: Customize the "Shop Now" button text and link

#### To add announcement messages:
1. In the Header section, click **Add block**
2. Select **Announcement**
3. Enter your message text
4. (Optional) Add a link

---

### 2. Hero Section (Arctic Hero Portal)
**Location:** Theme Editor > Home page > Arctic Hero Portal

#### What you can customize:
- **Headline**: Main hero text with liquid metal effect
- **Subheadline**: Supporting text below the headline
- **CTA Button**: Button text and link
- **Featured Product Image**: Upload an image to display with 3D rotation effect

#### Best practices:
- Keep headlines short and impactful (2-4 words work best)
- Use high-quality product images (800x800px minimum)
- Link the CTA to your best collection

---

### 3. Stats Banner
**Location:** Theme Editor > Home page > Stats Banner

#### What you can customize:
- **Statistics**: Add up to 4 stats (e.g., "50K+ Happy Customers", "4.9 Star Rating")
- **CTA Button**: Optional call-to-action below stats
- Each stat has a number, suffix (like +, %), and label

---

### 4. Product Grid (Arctic Product Grid)
**Location:** Theme Editor > Home page > Arctic Product Grid

#### What you can customize:
- **Section Title**: Heading text for the grid
- **Section Subtitle**: Optional description
- **Product Source**: Choose a collection OR manually select products
- **Number of Products**: Display 4-24 products
- **Sale Badges**: Show/hide discount percentages
- **Secondary Image**: Show alternate image on hover
- **View All Button**: Text and link for "View All" button

#### Tips:
- For best results, select products with consistent image sizes
- Use collections for automatic updates
- Manual selection gives you precise control over featured products

---

### 5. Premium Features
**Location:** Theme Editor > Home page > Premium Features

#### What you can customize:
- **Section Title & Subtitle**: Customize heading
- **Feature Blocks**: Add up to 4+ features with:
  - Icon (emoji)
  - Title
  - Description

#### Default features include:
- Free Shipping
- Easy Returns
- Secure Checkout
- 24/7 Support

---

### 6. Premium Testimonials
**Location:** Theme Editor > Home page > Premium Testimonials

#### What you can customize:
- **Section Title & Subtitle**
- **Rating Summary**: Show overall rating
- **Testimonial Cards**: Add customer reviews with:
  - Star rating (1-5)
  - Review text
  - Customer name
  - Photo (optional)
  - Verified buyer badge
  - Product purchased

---

### 7. Marquee Banner
**Location:** Theme Editor > Home page > Marquee Banner

A scrolling banner great for highlighting key benefits.

#### What you can customize:
- **Banner Items**: Add text with icons that scroll across the screen
- Items pause on hover

---

### 8. Footer
**Location:** Theme Editor > Footer section

#### What you can customize:
- **Brand Info**: Your store description
- **Navigation Menus**: Add menu blocks to display different link groups
- **Newsletter**: Enable/disable and customize text
- **Social Media**: Add links to your social profiles
- **Contact Info**: Add email, phone, and address
- **Legal Links**: Privacy Policy, Terms, Refund Policy
- **Payment Icons**: Show accepted payment methods

#### To add a menu column:
1. Click **Add block**
2. Select **Navigation Menu**
3. Enter a title (e.g., "Shop", "Help", "About")
4. Select a menu from your Navigation settings

---

## Managing Products

### Adding Products to Collections
1. Go to **Products** > **Collections** in Shopify admin
2. Create or edit a collection
3. Add products manually or use automated conditions

### Product Images
For best display:
- **Recommended size**: 800x800px minimum
- **Aspect ratio**: Square (1:1) works best
- **Format**: JPG or PNG
- Images are automatically optimized for different devices

### Product Reviews & Social Proof
To show review counts and sold counts on product cards, set up metafields:
- `reviews.rating` - Product rating (number)
- `reviews.count` - Number of reviews
- `custom.sold_count` - Products sold (for urgency messaging)

---

## Navigation Menus

### Creating Menus
1. Go to **Online Store** > **Navigation**
2. Click **Add menu** or edit existing menus
3. Add menu items with links to:
   - Collections
   - Products
   - Pages
   - Blog posts
   - External links

### Menu Names
- `main-menu` - Used in header navigation
- `footer` - Used for footer navigation blocks

---

## Tips for Best Results

### Mobile Optimization
- The theme is mobile-first, all sections automatically adapt
- Test your changes on mobile devices
- Keep announcement bar text short for mobile readability

### Images
- Use Shopify's built-in image editor to crop/resize
- Featured images should be consistent across products
- Hero images work best at 1920x1080px or larger

### Performance
- Don't add too many products to a single grid (8-12 is ideal)
- Use collections instead of manual product selection when possible
- Shopify automatically lazy-loads images

---

## Troubleshooting

### Products not showing?
1. Ensure products are published to the Online Store sales channel
2. Check that the selected collection has products
3. Verify products are not out of stock (if filtering is enabled)

### Add to Cart not working?
1. Ensure products have inventory or "Continue selling when out of stock" is enabled
2. Check that variants are available
3. Try refreshing the page

### Images look blurry?
- Upload higher resolution images (800x800px minimum)
- Ensure images are not overly compressed

### Footer menu not showing?
1. Check that you've added a **Navigation Menu** block to the footer
2. Ensure the selected menu has items
3. Verify the menu exists in Navigation settings

---

## Getting Help

- **Shopify Help Center**: help.shopify.com
- **Theme Support**: support@seasontrend.us

---

## Change Log

### Version 2.0.0 (Arctic Neo-Luxury)
- Complete redesign with Arctic Neo-Luxury aesthetic
- AJAX add-to-cart with animations
- Mobile-first responsive design
- Enhanced merchant customization options
- Improved image optimization
- Better accessibility support
