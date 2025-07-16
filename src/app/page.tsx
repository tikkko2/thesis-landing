import React from 'react';
import { Github, FileText } from 'lucide-react';

const ThesisLanding = () => {
  // Get the base path for GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/thesis-landing' : '';
  
  const VideoComparison = ({ title, description, originalVideo, resultUrl }: { title: string, description: string, originalVideo: string, resultUrl: string }) => {
    const originalVideoUrl = `${basePath}${originalVideo}`;
    const resultVideoUrl = `${basePath}${resultUrl}`;
    
    return (
      <div className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl">{description}</p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <video 
              src={originalVideoUrl} 
              autoPlay 
              muted 
              loop 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <video 
              src={resultVideoUrl} 
              autoPlay 
              muted 
              loop 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Animations of Digital Images</h1>
              <div className="text-sm text-gray-500">
                <span>Tiko Apridonidze</span> •
                <span className="ml-2">Kutaisi International University</span> •
                <span className="ml-2">2025</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                <FileText className="w-4 h-4 mr-2" />
                Paper
              </button>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                <Github className="w-4 h-4 mr-2" />
                Code
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Video Comparisons */}
        <div className="space-y-16">
          <VideoComparison
            title="Image Animation using Optical Flow and CIP advection (Test 1)"
            description="Integration of optical flow with CIP advection to animate static digital images. The motion patterns from video input drive the transport of pixel intensities in the target image."
            originalVideo="/test-1/video.mp4"
            resultUrl="/test-1/animated_video.mp4"
          />

          <VideoComparison
            title="Test 2"
            description="Longer video with building image (Wave)"
            originalVideo="/test-2/full_video.mp4"
            resultUrl="/test-2/animated_video02.mp4"
          />

          <VideoComparison
            title="Test 3"
            description="Longer video with nature image (Wave)"
            originalVideo="/test-2/full_video.mp4"
            resultUrl="/test-2/animated_video03.mp4"
          />

          <VideoComparison
            title="Test 4"
            description="Video with building image (Wave 2)"
            originalVideo="/test-3/wave02.mp4"
            resultUrl="/test-3/animated_video04.mp4"
          />

          <VideoComparison
            title="Test 5"
            description="Video with nature image (Wave 2)"
            originalVideo="/test-3/wave02.mp4"
            resultUrl="/test-3/test03.mp4"
          />

          <VideoComparison
            title="Test 7"
            description="Video with nature image (Flag)"
            originalVideo="/test-4/flag.mp4"
            resultUrl="/test-4/test04.mp4"
          />

          <VideoComparison
            title="Test 8"
            description="Video with nature image (Flag)"
            originalVideo="/test-4/flag.mp4"
            resultUrl="/test-4/test05.mp4"
          />
        </div>

        {/* Abstract */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Abstract</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              This thesis investigates advanced computational methods for creating three-dimensional animations of digital images through the integration of optical flow estimation and physics-based transport mechanisms. Inspired by contemporary digital artists like Refik Anadol, this research explores the feasibility of applying computational fluid dynamics principles to digital image processing for realistic motion effects.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The methodology combines three classical optical flow algorithms (Horn-Schunck, Lucas-Kanade, and Farneback) with high-order numerical schemes for solving advection equations. Through systematic evaluation on standard geometric test cases (cone, cube, cylinder, half-cylinder), three distinct numerical approaches are compared: upwind difference schemes, semi-Lagrangian methods, and the Constrained Interpolation Profile (CIP) method. The CIP method demonstrates superior performance in preserving sharp features and minimizing numerical diffusion, making it the optimal choice for image transport applications.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A novel GPU-accelerated PDE solver with parameter optimization capabilities is developed, achieving machine precision accuracy (8.94×10⁻¹¹ final loss) in identifying time-dependent coefficient functions using the L-BFGS-B algorithm. The solver successfully handles inverse problems for spatially varying coefficients on small-scale grids (7×7), though scalability limitations emerge for larger problem sizes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              However, direct application of physics-based transport methods to digital imagery reveals fundamental limitations. The experimental integration of optical flow and CIP advection results in severe visual degradation, with moving regions exhibiting random pixel coloration rather than realistic motion. This failure highlights the inadequacy of treating pixel intensities as passive scalar fields transported by flow fields.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The research addresses two primary problems: (A) extracting motion patterns from video to animate static images, and (B) exact motion mirroring with brightness variation considerations. While Problem A shows partial success in controlled scenarios, the overall findings indicate that purely physics-based approaches are insufficient for high-quality digital image animation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The study concludes that future developments require hybrid approaches incorporating perceptual constraints, feature-based transport mechanisms, and machine learning operators rather than purely mathematical transport equations. This work contributes valuable insights into both the potential and fundamental limitations of applying computational fluid dynamics to digital art creation, establishing a foundation for more sophisticated animation techniques that bridge mathematical rigor with visual perception requirements.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Keywords: Digital image animation, optical flow, advection equations, CIP method, parameter optimization, computational fluid dynamics, computer vision
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 Tiko Apridonidze. Research conducted at Kutaisi International University.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThesisLanding;