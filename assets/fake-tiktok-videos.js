/**
 * Fake TikTok Review Video Generator
 * Creates realistic-looking TikTok-style review videos using canvas
 * for demonstration and mockup purposes
 */

class FakeTikTokGenerator {
  constructor() {
    this.profiles = [
      { name: '@fashionista_maya', followers: '125K', avatar: '👸' },
      { name: '@style_guru_alex', followers: '89K', avatar: '🧑' },
      { name: '@trendy_sarah', followers: '234K', avatar: '👩' },
      { name: '@urban_vibes_jay', followers: '67K', avatar: '🧔' },
      { name: '@chic_lifestyle', followers: '412K', avatar: '👰' },
      { name: '@modern_minimalist', followers: '178K', avatar: '🧑‍💼' },
      { name: '@street_style_kim', followers: '92K', avatar: '👨' },
      { name: '@luxury_living', followers: '567K', avatar: '👸🏻' }
    ];
    
    this.reviews = [
      "OMG! This is literally the BEST purchase I've made this year! 😍",
      "I can't believe the quality! Way better than expected! ⭐⭐⭐⭐⭐",
      "Everyone keeps asking where I got this from! 🔥",
      "10/10 would recommend! Already ordered 2 more! 💯",
      "The comfort level is insane! Wearing it every day now! ✨",
      "Worth every penny! Don't even think twice! 💰",
      "This is my 3rd order and I'm obsessed! 🥰",
      "Finally found the perfect one! Thank you! 🙏"
    ];
    
    this.hashtags = [
      '#SeasonTrend #TrendingNow #MustHave',
      '#Fashionista #OOTD #StyleInspo',
      '#ShopLocal #SupportSmallBusiness #Trending',
      '#FashionTok #TikTokMadeMeBuyIt #Review',
      '#AmazonFinds #ShopWithMe #Haul',
      '#FashionFinds #StyleTips #OutfitIdeas'
    ];
  }
  
  /**
   * Generate a fake TikTok video element
   */
  generateVideoElement(index = 0) {
    const profile = this.profiles[index % this.profiles.length];
    const review = this.reviews[index % this.reviews.length];
    const hashtag = this.hashtags[index % this.hashtags.length];
    
    const wrapper = document.createElement('div');
    wrapper.className = 'fake-tiktok-video';
    wrapper.innerHTML = `
      <div class="tiktok-video-container">
        <canvas class="tiktok-canvas" width="270" height="480"></canvas>
        <div class="tiktok-overlay">
          <div class="tiktok-header">
            <span class="tiktok-avatar">${profile.avatar}</span>
            <div class="tiktok-user-info">
              <div class="tiktok-username">${profile.name}</div>
              <div class="tiktok-followers">${profile.followers} followers</div>
            </div>
            <button class="tiktok-follow-btn">Follow</button>
          </div>
          
          <div class="tiktok-footer">
            <div class="tiktok-description">
              <p>${review}</p>
              <p class="tiktok-hashtags">${hashtag}</p>
            </div>
            
            <div class="tiktok-actions">
              <button class="tiktok-action-btn">
                <span class="tiktok-icon">❤️</span>
                <span class="tiktok-count">${this.randomCount(5, 50)}K</span>
              </button>
              <button class="tiktok-action-btn">
                <span class="tiktok-icon">💬</span>
                <span class="tiktok-count">${this.randomCount(1, 10)}K</span>
              </button>
              <button class="tiktok-action-btn">
                <span class="tiktok-icon">🔗</span>
                <span class="tiktok-count">${this.randomCount(2, 20)}K</span>
              </button>
            </div>
          </div>
          
          <div class="verified-badge-overlay">
            <span class="verified-checkmark">✓</span>
            <span class="verified-text">Verified Buyer</span>
          </div>
        </div>
      </div>
    `;
    
    return wrapper;
  }
  
  /**
   * Draw animated content on canvas
   */
  drawVideoContent(canvas, colorIndex) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Create gradient background
    const gradients = [
      ['#667eea', '#764ba2'],
      ['#f093fb', '#f5576c'],
      ['#4facfe', '#00f2fe'],
      ['#43e97b', '#38f9d7'],
      ['#fa709a', '#fee140'],
      ['#30cfd0', '#330867'],
      ['#a8edea', '#fed6e3'],
      ['#ff9a9e', '#fecfef']
    ];
    
    const [color1, color2] = gradients[colorIndex % gradients.length];
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Add product mockup shapes
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(width * 0.2, height * 0.3, width * 0.6, height * 0.4);
    
    // Add shimmer effect
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(width * 0.3, height * 0.4, width * 0.4, height * 0.2);
    
    // Add text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🎁', width / 2, height / 2);
    
    ctx.font = '16px Inter, sans-serif';
    ctx.fillText('SeasonTrend Product', width / 2, height / 2 + 40);
  }
  
  /**
   * Initialize all fake TikTok videos on page
   */
  initializeFakeVideos() {
    const videoContainers = document.querySelectorAll('.trust-video-wrapper');
    
    videoContainers.forEach((container, index) => {
      // Check if it's a placeholder (no real video)
      const hasRealVideo = container.querySelector('video source[src*=".mp4"]');
      
      if (!hasRealVideo) {
        // Replace with fake TikTok video
        const fakeVideo = this.generateVideoElement(index);
        const trustVideo = container.querySelector('.trust-video');
        
        if (trustVideo) {
          trustVideo.innerHTML = '';
          trustVideo.appendChild(fakeVideo);
          
          // Draw canvas content
          const canvas = fakeVideo.querySelector('.tiktok-canvas');
          if (canvas) {
            this.drawVideoContent(canvas, index);
            
            // Add simple animation
            this.animateCanvas(canvas, index);
          }
        }
      }
    });
  }
  
  /**
   * Animate canvas with pulsing effect
   */
  animateCanvas(canvas, colorIndex) {
    let frame = 0;
    const animate = () => {
      const ctx = canvas.getContext('2d');
      
      // Add pulsing glow effect
      const pulse = Math.sin(frame * 0.05) * 0.5 + 0.5;
      ctx.shadowBlur = 20 * pulse;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
      
      frame++;
      
      if (frame < 100) { // Limit animation cycles
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }
  
  /**
   * Generate random count for likes/comments
   */
  randomCount(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const generator = new FakeTikTokGenerator();
    generator.initializeFakeVideos();
  });
} else {
  const generator = new FakeTikTokGenerator();
  generator.initializeFakeVideos();
}

// Export for manual initialization if needed
window.FakeTikTokGenerator = FakeTikTokGenerator;
