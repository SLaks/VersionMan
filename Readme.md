#VersionMan

This extension automatically redirects developer documentation (MSDN, JavaDocs, etc) to the latest version.

You can also select a specific version for each supported piece of documentation in the extension options.

If you open a page that does not exist in your preferred version, the extension will warn you that you're seeing a different version.  
It will also have an option to temporarily open a different version for a single tab.

##Supported Libraries:
 - [Javadocs](http://docs.oracle.com/javase/)
  - http://docs.oracle.com/javase/1.3/docs/api/index.html
  - http://docs.oracle.com/javase/1.4.2/docs/api/index.html
  - http://docs.oracle.com/javase/1.5.0/docs/api/index.html
  - http://docs.oracle.com/javase/6/docs/api/index.html
  - http://docs.oracle.com/javase/7/docs/api/index.html

 - [Node.js](http://nodejs.org/docs/)
  - List of SemVers parsed from that page
  - http://nodejs.org/docs/latest/api/
	
 - MSDN
  - Expression: http://msdn.microsoft.com/en-us/library/cc295322(v=expression.40).aspx
  - XNA: http://msdn.microsoft.com/en-us/library/bb203940(v=xnagamestudio.40).aspx