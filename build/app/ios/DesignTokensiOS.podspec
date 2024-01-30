Pod::Spec.new do |s|
  s.name             = 'DesignTokensiOS'
  s.version = ''
  s.summary          = 'Design system tokens in iOS format'
  s.description      = 'Design system tokens in iOS format, uploaded to Cocoapods'
  s.homepage         = 'https://www.jet2.com'
  
  # Adding a comment to clarify that the license information is specified in the podspec
  s.license = { :type => 'MIT', :file => 'LICENSE' } # License information is directly specified here

  s.author           = { 'UX Dev' => 'uxdev@email.com' }
  s.source           = { :git => 'https://github.com/lfantom/design-tokens-poc.git', :tag => '0.0.7' }
  s.platform = :ios, '11.0'
  s.source_files = '**/*.{h,m,swift}', '**/*.{h,m,swift}'
  # Add any other dependencies or configurations here
end