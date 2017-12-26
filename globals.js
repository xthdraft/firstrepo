/* ===============   GLOBALS ========= from d4.js ===== */
var arr=[];  // convenience
var max_edit_distance = 2; 
var verbose = 2; //2;
var dictionary = {};  // load via function fileToWords_alternate()
var suggest_dict = {};
var longest_word_length = 14 ;
var silent = 0;
// for spell checker
var spellChecking = 1;
var spellingFunctions = 1;
var spellMarkings = 0;
var spellSuggestions = 1;
var asyoutype = 0;   // do not change: 1 for dynamic spell checking not supported
var suggestions = "";
var spellnode = null;
var dictFlag = 0;
var spellWord = "";     // the word being spell checked
var showSpelling = 1;
var symindex = '';  // references a dictionary in SymSpell routines
var WAIT = 100; //200;
var timer = 0;
var allowCheck = 0;
var clickedElement = null;
var ss='';    // for window.getSelection() testing in firebug
var rr='';    // for ss.getRangeAt(0)
var bkmarkOffset = 0;
var bkmarkNew = '';
var bkmarkNewOffset = 0;
var bkmarkOld = '';  // for spellCheck()
var bkmarkOldOffset = 0;
var currentClickedWord = "";
var previousClickedWord = "";
var spells = [];
var firstnode = '';
var newnode = '';
var rect='';  // for rr.getBoundingClientRect()
var savedSel = '';
var rangeDad = '';
var rangeGrandad = '';
var rangeArr=[];
var outer = '';
var inner = '';
var frag='';
var listOfFunctions = [];
var functionStr = '';
var fileURL='';
var gfileType = '';
var file_load_flag = 0;
var spin_count = 0;
var proj_file_index = 0;
var verbflag = 0;
var tenseflag = 0;
var meta_tenseblocks;
var comments_index = new Array();  // holds indexes to comments
var commentsarray = new Array();   // holds actual comment strings
var commentsObj = new Array();      // hold the objects: commentsObj[0][0] holds first object, first file
                                   // create for next file with:  commentsObj.push([])
var scrollpos = new Array();
var currentKeywordId = new Array();         // the currently selected keyword eg 'c1', 'c2' etc  
var allComments = 1;               // show all comments in rightpane;   =0 show only current comment  
var scrollAmount=0;
var scrTop1 = 0;
var keyWordTop = 0;
var clickedTop = 0;
var pagetop = 0;
var clickedHeight = 0;
var commentsStr = '';
//comments[0]=1;

/* ==== for SHOWCLICK() to transfer marked paragraphs to the server for verb processing ==== */
//   this is showClick() - not the same function as showclick() in fftext.js 

var origstr;
var interimstr;
var commonAncestorNode;
var anchor;
var focus;
var charStartpos;      // offset of char at mousedown within startcontainer 
var charEndpos;        // offset of char from mouseup within endcontainer
var clonedRange;
var cloneParStart;
var cloneParEnd;       // indexes of <p> element to hold the clonedRange
var showCursor = 0;
var saveX;
var saveY;

var punct = ",.;:?!"; 
var beginContainer;
var endContainer;

// ================ end of showclick() globals

/* ==== PROJECTS / BOOKS ==== values stored in project.ini */

var project_common = [];
var projects = [];
var project_string = '';
var project_array = []; // an array of project names
                        // eg project_array[0] = '^0<option onclick=showProjectFiles(event); 
                        //                          value=C:\fiction\latest\fiction_bk.htm id=p0 
                        //                          class=bk>fiction</option>'

var members_array = []; // array of strings referring to option filenames
                        // eg members_array[0][0] = "<option onclick=showSelectedFile(event); 
                        //                          value=C:\dedalus\v4-1\architects.htm class=s0>architects</option>"
                        // members_array.length gives the number of files in their corresponding project

var selectedProject= '';        // the option selected from a project list - an object reference
                          // eg <option id="p1" class="bk" value="C:\fiction\latest\essays_bk.htm" onclick="showProjectFiles(event);">
var selectedProjectFile = '';   // the option selected from a project's file list - an object reference
                          // eg <option class="s1" onclick="showSelectedFile(event);" value="C:\fiction\artessays\picasso.htm">

// globals for xthdraft v6

var version = "chrome";   
var dedalusfile = 0;
var counter = 0;   // general purpose counter for debugging
//var pathroot = "C:\\dedalus\\v5\\v5-8\\";       // maybe upgrade to v6-0 ?? 
var pathroot = "C:\\dedalus\\v6\\v6-1\\";
var urlroot = "file:///C:/dedalus/v6/v6-1/";    // file URLs only, NOT normal filepaths
var bakfile_path = "c:\\fiction\\latest\\bakup";
var readerfolder  =  "C:\\gigitales\\reader_3\\";   // parent folder files going to gigistales.com
var momm = null;            // momm acronym for _m_ or _mm_
var popupWin = null; 
var newIframe = null;
var printPreviewType = 0;
/* ===  for debug ========================================================================== */

//var firstTime = 1;
var helpitem;
var helpID;
var alertflag = 0;
var debug = 0;
var fdebug = 0;            // set to 1 to activate stacktrace()
var keepfilelistopen = 0;
var prevelement = 1;
var previousElementId = 'editMenu_select_outMenu';
var previousDropElement = 'fileMenu_save';
var callingElemId = '';
var callingElement = 1;
var elementMovedTo;
var mainElementMovedTo;
var elementMovedFrom; 
var mainElementMovedFrom;
var currentElem;
var menuShowing = null;
var showEdit = 0;
var showSelect = 0;
var showFormat = 0;
var showInsert = 0;
var showFind = 0;
var lastClickedElement = null;   // in leftpanecontent only
var livemenu = 0;
var cancelled = 0;  // 1 if filemenu close file is cancelled

/* ======= misc ======== */
var extrafilebars = 0;   // reserved for extra filebar - not yet implemented
var clickedElement = null;   //  used by check() to identify the clicked element
var frag = '';
var fragtxt = '';
var copyfrag = null;  // for copy/paste
var headfrag = '';
var tailfrag = '';
var ssrr = '';
var savedSel = '';
var rangeDad = '';      // used in format.js for debugging purposes
var rangeGrandad = '';  // used in format.js for debugging purposes
var outer = '';
var inner = '';
var listOfFunctions = [];
var functionStr = '';
var gfileType = '';
var file_load_flag = 0;
var proj_file_index = 0;
var verbflag = 0;
var tenseflag = 0;
var meta_tenseblocks;
	// 	for dumbquotes()
    //  from http://archive.oreilly.com/pub/h/4110
	//  straighten curly quotes and apostrophes
	
var arReplacements = {
		"\xa0": " ",
		"\xa9": "(c)",
		"\xae": "(r)",
		"\xb7": "*",
		"\u2018": "'",
		"\u2019": "'",
		"\u201c": '"',
		"\u201d": '"',
		"\u2026": "…",
		"\u2002": " ",
		"\u2003": " ",
		"\u2009": " ",
		"\u2013": "-",
		"\u2014": "--",
        "\u0060\u0060":'"',
		"\u2122": "(tm)"};
var arRegex = [];

// KEYBOARD CONSTANTS for keyboard user assigned keys

var TOGGLEEDIT = 123;   // F12
var FULLSCREEN = 122;   // F11 key which is browser default:  Fn key is 255 in chrome, 0 in ff
var MINIMALVIEW = 13;   // ENTER on numeric keypad
var CHANGEDISPLAYPAGES = 112 // F1
var CHANGESHIFT = 113;  // F2
var SHOWEDIT = 114;     // F3
var SHOWFORMAT = 115;   // F4
var SHOWSELECT = 65;    // ALT A
var SHOWINSERT = 73;    // ALT I
var SHOWFIND = 70;      // ALT F
var SHOWSHORTCUTS = 121;  // F10
var CLEARCALLSTACK = 66;      // Alt  B 
var SHOWCOMMENTS  = 67;       // ALT  C
var SHOWFOOTNOTES = 79;       // ALT  O
var SHOWTENSE = 84;           // ALT  T

// COMMENTS
var cflag = 0;   // comments not showing
var comments_index = [];  // holds indexes to comments
var commentsarray = [];   // holds actual comment strings
var commentsObj = [];      // hold the objects: commentsObj[0][0] holds first object, first file
                                   // create for next file with:  commentsObj.push([])
var scrollpos = [];
var commentWord = null;           // word selected as keyword in _m_
var savedCommentSpans = [];       // save comment spans when using tense functions
var commentKeywords = [];  // to hold the selected word which keys the comment
var currentKeywordId = [];         // the currently selected keyword eg 'c1', 'c2' etc  
var allComments = 1;               // show all comments in rightpane;   =0 show only current comment  
var lastCommentIndex = 1;     // for reorderComments() function
var scrollAmount = 0;
var scrTop1 = 0;
var keyWordTop = 0;
var clickedTop = 0;
var pagetop = 0;
var clickedHeight = 0;
var commentsStr = '';

// FOOTNOTES
var fflag = 0;  // footnotes not showing
var footNotes_index = [];
var footNotesarray = [];
var footNoteKeywords = [];
var footNotesObj = [];
var footNoteWord = null;
var currentfootNoteKeywordId  = [];
var allfootNotes = 1;
var lastfootNoteIndex = 1;
var footNoteKeyWordTop = 0;
var tenseblocksHighlighting = 0;  // controls highlighting of tense blocks in leftpanecontent;  ==1 blocks are highlighted
var lastTenseblockHighlighting = 0;  // controls highlighting of most recently tensed block in leftpanecontent;  ==1 block is highlighted

/* ==== for SHOWCLICK() to transfer marked paragraphs to the server for verb processing ==== */
//   this is showClick() - not the same function as showclick() in fftext.js 

var origstr;
var interimstr;
var commonAncestorNode;
var anchor;
var focus;
var charStartpos;      // offset of char at mousedown within startcontainer 
var charEndpos;        // offset of char from mouseup within endcontainer
var clonedRange;
var cloneParStart;
var cloneParEnd;       // indexes of <p> element to hold the clonedRange
var showCursor = 1;
var saveX;
var saveY;
var punct = ",.;:?!";
var beginContainer;
var endContainer;

/* ==== PROJECTS / BOOKS ==== values stored in project.ini */
var project_ini_location = pathroot + "project.ini";   // ie C:\\dedalus\\v5\\v5-8\\project.ini
var project_common = [];
var projects_open = 0;   // = 1 when 1 project is open, =2 when 2 projects open, etc
var projfilesclosed = 0;  // = 1 when returning from closing a project
var projects = [];
var project_string = '';
var project_array = []; // an array of project names
                        // eg project_array[0] = '^0<option onclick=showProjectFiles(event); 
                        //                          value=C:\fiction\latest\fiction_bk.htm id=p0 
                        //                          class=bk>fiction</option>'

var members_array = []; // array of strings referring to option filenames
                        // eg members_array[0][0] = "<option onclick=showSelectedFile(event); 
                        //                          value=C:\dedalus\v4-1\architects.htm class=s0>architects</option>"
                        // members_array.length gives the number of files in their corresponding project

var selectedProject = '';  // the option selected from a project list - an object reference
                          // eg <option id="p1" class="bk" value="C:\fiction\latest\essays_bk.htm" onclick="showProjectFiles(event);">
var selectedProjectFile = '';   // the option selected from a project's file list - an object reference
                          // eg <option class="s1" onclick="showSelectedFile(event);" value="C:\fiction\artessays\picasso.htm">

/* global E */
/* global window */

// ------------------ set up system-wide global variables
if (typeof E === "undefined" || !E)
{
        /* 
         * The E global namespace object to hold environment variables.  If E is already defined,
         * the  existing E object  will not be overwritten so that the defined  namespace is preserved
         * all variables placed  here are static and accessible by all functions
         */ 
    var E = {};
}
   else
   {
    alert(' the E namespace already exists -  change this name in the jscript file ');
   }

// get all  globals into the one place in preparation for placing into  E    namespace in a future revision
// as it stands, window is the global namespace
// use 0 in place of false  and 1 in place of true

/* browser detection */

var nn4 = (document.all) ? 0 : 1;
var ie = (document.all) ? 1 : 0;
var dom = (document.getElementById && !document.all) ? 1 : 0;
/* === for  drag routines - but will be replaced when   dragdiv3-3.js is integrated  */

var globalid = '';               // holds the div clicked on as a string (eg 'sep_wrapper')
var body_wrapper_height = document.documentElement.clientHeight;
                // the document.documentElement.clientHeight less  the  document.documentElement.clientTop;
var dragobj_width = 0;   // holds the width of the dragged object
var dragobj_height = 0;
var horiz = 1;                   // =1 enable horizontal dragging
var vert = 1;                    // = 1 enamble vertical dragging
var mouseX;
var mouseY;
var clicked = null;            // = clickedElement =  e.target for firefox
                               // ie the nearest ancestor element containing the clicked point
var gNewFocus;
/*  === css rules for updating the css globals  */
// rules.css contains the main divs      - is the last .css file loaded so can be changed 
var rulesheet = 2;
//var styleObj = document.styleSheets[rulesheet];    
//  CARE - all files calling this script must have the same 2 css files
var css = [];       // to contain the indexes for functions using  document.styleSheets[rulesheet]

// stuff which should be stripped from imported word files
var badClassValues = ['MsoNormal'];

// IMPORTANT: these indexes have to be looked at (15/09/11)

//css.p0b = 0;
//css.p1b = 1;
//css.w0b = 2;
//css.w1b = 3;
css.q = 0;
css.qclass = 1;
css.tensepane = 2;
css.comments = 3;
css.notes = 3;
css.para = 4;
css.footNotes = 6;
css.p = 7;
css.leftpanecont = 8;
css.lastblock = 9;
css.comment = 10;
css.plist = 11;
css.spelling = 12;
// for latex function replaceCommands()
var classCommands = [];
classCommands.center = ["\\vspace{6mm}\\MYpcenter{",
                      "}\\vspace{6mm}"];

classCommands.fst =    ["\\lettrine[lines=2,slope=-4pt,nindent=4pt]{", 
                      "}"]; 
classCommands.rectangle = ["\\par\\noindent\\\\ ",  "\\\\{\\parfillskip=0pt \\emergencystretch=.5\\textwidth \\par}"];
var styleCommands = [];
styleCommands["color:red"] = ["\\textcolor{red}{"];
styleCommands["color:blue"] = ["\\textcolor{blue}{"];
styleCommands["font-family:arial"] = ["\\palatino{"];
styleCommands["font-variant:normal"] = [""];
styleCommands["font-variant:small-caps"] = ["\\textsc{"];
styleCommands["text-decoration:underline"] = ["\\mn{"];   
styleCommands["font-style:italic"] = ["\\textit{"];
styleCommands["text-align:left"] = ["\\RaggedRight{"];  // use package ragged2e
styleCommands["text-align:right"] = [""];
styleCommands["text-align:center"] = [""];
styleCommands["text-align:justify"] = [""];
styleCommands["font-weight:normal"] = [""];
styleCommands["font-weight:bold"] = [""];
styleCommands["font-style:normal"] = [""];
styleCommands["font-style:italic"] = ["\\textit{"];
styleCommands["text-decoration:none"] = [""];
styleCommands["text-decoration:underline"] = ["\\ul{"];
styleCommands["text-decoration:overline"] = [""];
styleCommands["text-decoration:strike-through"] = ["\\st{"];
styleCommands["text-decoration:blink"] = [""];
styleCommands["text-transform:normal"] = [""];
styleCommands["text-transform:capitalize"] = ["\\capitaliseword{"];
styleCommands["text-transform:uppercase"] = ["\\MakeUppercase{"];
styleCommands["text-transform:lowercase"] = [""];
//styleCommands[""] = [""];
//styleCommands[""] = [""];
//styleCommands[""] = [""];
//styleCommands[""] = [""];

/* ===  screen, window, client coordinates   (cross-browser except where indicated) */

var screenheight = window.screen.height;                        // full  screen res in pixels eg 900
var screenwidth = window.screen.width;                          // eg 1440
var screen_availwidth = window.screen.availWidth;       // normally same as screenwidth
var screenleft = window.screenLeft;              //  IE only -taken up by any content to left of document window - eg editplus cliptext window if open
                                                                         //  should sense if > 0 and set to 0 if possible
var screentop = window.screenTop;              //  IE only - taken up by any content above document window - eg editplus or browser toolbars
                                                                        // must sense when this changes - eg if a toolbar is closed
var client_width = document.documentElement.clientWidth;           // IE only - width of the document client area
var client_height = document.documentElement.clientHeight;     // IE only -  height of document client area    - affected by presence of toolbars, status bar etc
                                                                                                      // can set body_wrapper height = clientHeight
var bodywidth;                                               // width of document body = client_width if body element set at 100%
                                                                       // ie it equals the styled width of the body element (actual pixels of % of client_width
var bodyheight;                                            // height of body element - if left unset defaults to 100% and = client_height

/*  === keyboard detection */

var keyhit = 0;
var inserttype = 0;     // 0==normal    1==verb

/*  === leftpane/rightpane resizing */

var leftedge= 630;
var rightedge = 0;
var topedge = 0;
var bottomedge = 0;
var rightsource = 0;                                      // disallow showing source in right pane
var innertextview = 1;
var render = 1;                     // =0 load source into left pane,  =1 load rendered
var windowsplit = 0;         // =1 window is split
var expandedwindow = 1;     // =1 left window expanded   =2 rightwindow expanded   =0 no window expanded
var windowdirective = "";           // split or expand
var editdirective = "";             // source or view

/*  === outline routines */

var outlineswitch = 1;                     // ==1 outlinepane hidden   == 0 outlinepane visible
var sourceswitch = 0;                      // ==1 sourcepane hidden   == 0 sourcepane visible

/* === editor window === */
var fileType = '.htm';
var gap = 100;
var readOnlyFlag = 0;      // =1 to allow editing
var twopageDisplayAllowed = 1;
var displayPages = 1;
var shift_pages = 2;
var shift_directive = '<-2->';
var shiftleft = 0;    // for setting the text display to the left by some value (= 0 produces a hard left of screen text display)
var shiftPixels = 50; // shiftleft gets incremented/decremented by this
var editorPaneWidth = [];
var shift_value = [];
var pageJump = [];
var sliderPaneLeft = 310;    // sliderpane margin-left 110px + leftpanecontent left of 200px
editorPaneWidth[0] = 1000;
shift_value[0] = 550;
pageJump[0] = 760;           // default for 1000px width for 1 page display;  = 1310 for 2 page display
                             // this changes with changelinewidth() for any particular filepos                            
var newY = 0;
var oldY = 0;
var leftpage_number = [];
var rightpage_number = [];
leftpage_number [0] = 1;
rightpage_number [0] = 2;
var scroll_toggle = [];
scroll_toggle[0] = 0;    // scroll off this file
var scrollpage = [];
scrollpage[0] = 1;
var num_lines = [];
var num_pages = [];

/* ==== copy/paste ===== */

var nodes = [];
var didxcopy = 1; // custom copy/paste

/* === file i/o === */

var graphics_files = ['.bmp', '.gif', '.ico', '.jpg'];

/* === undo/redo routines */


var kcode = 0;
var keypressed = "";
var undobugstr = "";
var stackIndex = 0;
var bkmark = "";

/* === text range routines */

var caretPos = null;
var savedHTML = '';
var selection_bkmark  = '';

/* ===  :xmlhttpPost switch  (=0: use leftpanecontent,  =1: use filename of currently displayed file === */
var ajax_post_switch = 0;

/* === for cgitest-trans routines === */
var verbswitch = 0;

/*  === menus ====== */

var menus = {};                           // menus.length == 5
menus.topmenubar = 0;
menus.menu2 = 1;
menus.navmenu = 2;
menus.menu3 = 3;
menus.sliderpane = 4;
var nummenus = 5;            // cannot use menus.length on associative array - see    http://www.mojavelinux.com/articles/javascript_hashes.html
var menupos = ["0px", "23px", "46px", "69px", "91px"];             // top positions of menus
var menusfixed = [1, 0, 0, 0, 0];                  // only the top menu is fixed
var menusclear = [1, 1, 1, 1, 1];
var linksshowing = 0;               // =1 if links drop down menu is showing

var visibility = [];
visibility[1] = "visible";
visibility[0] = "hidden";

/* ==== plist ====== */

var plist = [10,40,70,100];

/* === portal ======== */

var whichwindow = 1;                    //  0= refframe   1 = top
                                        //  this only applies to which window linked sites are opening in
                                        //  it doesn't tell whether leftpane is showing
var keephistory = 0;                    //  0 = maintain history   1 = use replace() and don't keep history
var windowshowing = ["frame", "top window"];
var historykept = ["maintained", "not maintained"];

/* === natural language processing - dedalus ========= */

var currenttense = 0;
var stats = [[1, 0]];   // stats[0][1] == 0
var phrases = [""];
var numblocks = 9;
var verbcolor = 0;
var blockcolor = 0;

/* === styles ========= */

var colorswitch = ["ForeColor", "BackColor"];
var selectname = ["family", "fstyle", "fweight", "fsize", "fwidth", "fspace", "align", "flinks", "visited"];
var selectproperty = ["font-family:", "font-style:", "font-weight:", "font-size:",
                                "width:", "line-height:", "text-align:", "", ""];
       
var sInitColor = null;               //  needs to have global scope for the callColorDlg function to persist the chosen color
var fontfamilyrule = 13;


/* ======= misc ======== */

var prevnode = 0;

/*  fontsizes */

var selSize = 3;
var wordNode = null;  // word dblclicked in leftpanecontent

var fontsizes = {};
fontsizes['8px'] = 1;
fontsizes['9px'] = 1;
fontsizes['10px'] = 1;
fontsizes['11px'] = 2;
fontsizes['12px'] = 2;
fontsizes['13px'] = 2;
fontsizes['14px'] = 3;
fontsizes['15px'] = 3;
fontsizes['16px'] = 3;

var fsizes = {};
fsizes['8px'] = 0;
fsizes['9px'] = 1;
fsizes['10px'] = 2;
fsizes['11px'] = 3;
fsizes['12px'] = 4;
fsizes['13px'] = 5;
fsizes['14px'] = 6;
fsizes['15px'] = 7;
fsizes['16px'] = 8;


var ffamilies = {};
ffamilies.georgia = 0;
ffamilies['times new roman'] = 1;
ffamilies.arial = 2;
ffamilies['bookman old style'] = 3;

var fwidths = {};
fwidths['800'] = 0;
fwidths['900'] = 1;
fwidths['1000'] = 2;
fwidths['1100'] = 3;
fwidths['1200'] = 4;
fwidths['1300'] = 5;
fwidths['1400'] = 6;

var fheights = {};  // order to agree with index.html
fheights['90%'] = 0;
fheights['80%'] = 1;
fheights['100%'] = 2;
fheights['70%'] = 3;
fheights['60%'] = 4;
fheights['50%'] = 5;

var attribsToWrap = null;
var copfrag=null;
var icac=null;