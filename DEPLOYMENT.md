# Deployment Guide for Levwo

This guide covers different deployment options for your Levwo website.

## 🌐 Deployment Options

### Option 1: Shopify Theme (Recommended for E-commerce)

**Best for**: Full e-commerce functionality with product management, payments, and inventory

1. **Prepare Theme Package**
   ```bash
   # Create theme directory structure
   mkdir levwo-theme
   cp -r layout sections snippets assets levwo-theme/
   cp theme.json levwo-theme/
   ```

2. **Upload to Shopify**
   - Go to Shopify Admin → Online Store → Themes
   - Click "Upload theme"
   - Upload the ZIP file
   - Click "Customize" to configure

3. **Configure Settings**
   - Add your logo
   - Set up navigation menus
   - Connect payment providers
   - Configure shipping options

**Documentation**: See [SHOPIFY_INTEGRATION.md](./SHOPIFY_INTEGRATION.md) for detailed instructions

---

### Option 2: Static Site Hosting (For Landing Page)

**Best for**: Marketing landing page without e-commerce functionality

#### Netlify (Free)

1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import from Git"
   - Connect your GitHub repository

2. **Configure Build**
   - Build command: (leave empty)
   - Publish directory: `/`
   - Deploy!

3. **Custom Domain**
   - Go to Domain settings
   - Add `levwo.com`
   - Update DNS records

#### Vercel (Free)

1. **Import Project**
   - Go to [Vercel](https://vercel.com)
   - Click "Add New" → "Project"
   - Import from GitHub

2. **Deploy**
   - Framework: None
   - Root Directory: `/`
   - Click "Deploy"

3. **Custom Domain**
   - Go to Settings → Domains
   - Add `levwo.com`

#### GitHub Pages (Free)

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` or `copilot/create-ui-ux-color-palette`
   - Folder: `/ (root)`
   - Save

2. **Access Site**
   - Your site will be at: `https://noor-87dsdp-beep.github.io/levwo`

3. **Custom Domain**
   - Add `CNAME` file with your domain
   - Configure DNS records
   - Enable HTTPS in settings

---

### Option 3: Traditional Web Hosting

**Best for**: Full control over server configuration

#### Requirements
- Web server (Apache/Nginx)
- PHP support (optional, for contact forms)
- SSL certificate
- FTP/SFTP access

#### Deployment Steps

1. **Upload Files via FTP**
   ```bash
   # Using SFTP
   sftp user@yourserver.com
   put -r /path/to/levwo/* /var/www/html/
   ```

2. **Configure Web Server**

   **Nginx Configuration** (`/etc/nginx/sites-available/levwo.com`):
   ```nginx
   server {
       listen 80;
       server_name levwo.com www.levwo.com;
       root /var/www/html;
       index index.html;
       
       location / {
           try_files $uri $uri/ =404;
       }
       
       # Enable gzip compression
       gzip on;
       gzip_types text/css application/javascript application/json;
       
       # Cache static assets
       location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

   **Apache Configuration** (`.htaccess`):
   ```apache
   # Enable compression
   <IfModule mod_deflate.c>
       AddOutputFilterByType DEFLATE text/html text/css application/javascript
   </IfModule>

   # Cache static assets
   <IfModule mod_expires.c>
       ExpiresActive On
       ExpiresByType text/css "access plus 1 year"
       ExpiresByType application/javascript "access plus 1 year"
       ExpiresByType image/png "access plus 1 year"
   </IfModule>

   # Redirect to HTTPS
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

3. **Install SSL Certificate**
   ```bash
   # Using Let's Encrypt (free)
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d levwo.com -d www.levwo.com
   ```

---

### Option 4: Cloud Platforms

#### AWS S3 + CloudFront

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://levwo.com
   aws s3 website s3://levwo.com --index-document index.html
   ```

2. **Upload Files**
   ```bash
   aws s3 sync . s3://levwo.com --exclude ".git/*"
   ```

3. **Configure CloudFront**
   - Create distribution
   - Set origin to S3 bucket
   - Configure custom domain
   - Enable HTTPS

#### Google Cloud Platform

1. **Create Bucket**
   ```bash
   gsutil mb gs://levwo.com
   gsutil web set -m index.html gs://levwo.com
   ```

2. **Upload Files**
   ```bash
   gsutil -m rsync -r . gs://levwo.com
   ```

3. **Set Permissions**
   ```bash
   gsutil iam ch allUsers:objectViewer gs://levwo.com
   ```

---

## 🔧 Post-Deployment Configuration

### 1. DNS Configuration

Add these DNS records:
```
A     @           [Your IP Address]
CNAME www         levwo.com
TXT   @           "v=spf1 include:_spf.google.com ~all"
```

### 2. SSL/HTTPS Setup

- **Shopify**: Automatic SSL included
- **Netlify/Vercel**: Automatic SSL included
- **Traditional Hosting**: Use Let's Encrypt

### 3. Analytics Setup

**Google Analytics 4**:
```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Facebook Pixel**:
```html
<!-- Add to index.html <head> -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### 4. Email Integration

**Newsletter Service**:
- Mailchimp: Update form action in index.html
- Klaviyo: Install Klaviyo app (Shopify)
- ConvertKit: Add ConvertKit form embed

### 5. Payment Setup (Shopify)

1. Enable Shopify Payments
2. Add alternative payment methods:
   - PayPal Express
   - Apple Pay
   - Google Pay
   - Shop Pay

---

## 🚀 Performance Optimization

### 1. Image Optimization

**Before Upload**:
- Compress images: [TinyPNG](https://tinypng.com)
- Use WebP format when possible
- Recommended sizes:
  - Hero images: 1920x1080px
  - Product images: 800x800px
  - Thumbnails: 400x400px

### 2. CDN Configuration

**Cloudflare** (Recommended):
1. Sign up at [Cloudflare](https://cloudflare.com)
2. Add your domain
3. Update nameservers
4. Enable these features:
   - Auto Minify (CSS, JS, HTML)
   - Brotli compression
   - Rocket Loader
   - HTTP/2
   - Caching

### 3. Caching Strategy

**Browser Caching** (in `.htaccess` or nginx config):
```
# Cache static assets for 1 year
CSS, JS, Images: max-age=31536000

# Cache HTML for 1 hour
HTML: max-age=3600
```

---

## 🧪 Pre-Launch Checklist

- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Verify all links work
- [ ] Test contact forms
- [ ] Test newsletter signup
- [ ] Verify shopping cart (if Shopify)
- [ ] Check page load speed (< 3 seconds)
- [ ] Verify SSL/HTTPS works
- [ ] Test on slow 3G connection
- [ ] Check accessibility (WAVE, Lighthouse)
- [ ] Verify SEO meta tags
- [ ] Submit sitemap to Google
- [ ] Set up Google Search Console
- [ ] Configure Google Analytics
- [ ] Test payment processing
- [ ] Set up email notifications
- [ ] Create 404 error page
- [ ] Add favicon
- [ ] Test social media sharing
- [ ] Verify Open Graph images
- [ ] Check mobile responsiveness
- [ ] Test form submissions
- [ ] Verify GDPR compliance
- [ ] Set up backup system

---

## 📊 Monitoring & Maintenance

### Analytics Tools

1. **Google Analytics**: Track traffic and conversions
2. **Hotjar**: Heatmaps and session recordings
3. **Google Search Console**: SEO performance
4. **Shopify Analytics**: Sales and customer data
5. **PageSpeed Insights**: Performance monitoring

### Regular Tasks

**Daily**:
- Monitor order notifications
- Respond to customer inquiries
- Check for errors in logs

**Weekly**:
- Review analytics data
- Update featured products
- Check inventory levels
- Respond to reviews

**Monthly**:
- Review SEO rankings
- Update blog content
- Analyze conversion rates
- Review security logs
- Update software/plugins
- Backup website

---

## 🆘 Troubleshooting

### Common Issues

**Issue**: Website not loading
- Check DNS propagation (48 hours)
- Verify SSL certificate
- Check server status

**Issue**: Slow loading speed
- Optimize images
- Enable caching
- Use CDN
- Minify CSS/JS

**Issue**: Mobile not responsive
- Clear browser cache
- Test on real devices
- Check viewport meta tag

**Issue**: Forms not working
- Verify form action URL
- Check email configuration
- Test SMTP settings

---

## 📞 Support

- **Technical Support**: support@levwo.com
- **Shopify Help**: help.shopify.com
- **Documentation**: [README.md](./README.md)
- **Integration Guide**: [SHOPIFY_INTEGRATION.md](./SHOPIFY_INTEGRATION.md)

---

## 🎉 Launch!

Once everything is tested and configured:

1. Remove password protection (if any)
2. Announce on social media
3. Send email to subscribers
4. Submit to search engines
5. Start marketing campaigns
6. Monitor performance

**Congratulations on launching Levwo! 🚀**