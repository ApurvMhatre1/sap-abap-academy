const QUESTIONS = [
  {
    "id": 1,
    "topic": "SAP Architecture",
    "question": "Which layer in a typical SAP three-tier architecture is responsible for executing ABAP programs?",
    "options": {
      "A": "Presentation layer",
      "B": "Application layer",
      "C": "Database layer",
      "D": "Network layer"
    },
    "answer": "B",
    "explanation": "The application layer contains the ABAP runtime and executes application logic."
  },
  {
    "id": 2,
    "topic": "SAP Architecture",
    "question": "Which database technology is the foundation of SAP HANA?",
    "options": {
      "A": "Disk-only relational storage",
      "B": "In-memory columnar database technology",
      "C": "Hierarchical file database",
      "D": "Tape-based database"
    },
    "answer": "B",
    "explanation": "SAP HANA is an in-memory database with column-oriented storage as a core technology."
  },
  {
    "id": 3,
    "topic": "SAP Architecture",
    "question": "Which component normally provides the user interface for an SAP GUI transaction?",
    "options": {
      "A": "Database server",
      "B": "Presentation layer",
      "C": "Message server",
      "D": "Enqueue server"
    },
    "answer": "B",
    "explanation": "SAP GUI belongs to the presentation tier."
  },
  {
    "id": 4,
    "topic": "SAP Architecture",
    "question": "What is the primary purpose of the SAP message server?",
    "options": {
      "A": "Store application tables",
      "B": "Manage logical locks",
      "C": "Provide communication and load balancing between application servers",
      "D": "Compile ABAP programs"
    },
    "answer": "C",
    "explanation": "The message server manages communication between application servers and supports logon/load distribution."
  },
  {
    "id": 5,
    "topic": "ABAP Dictionary",
    "question": "Which ABAP Dictionary object defines the technical attributes of a database table field?",
    "options": {
      "A": "Domain",
      "B": "Data element",
      "C": "Search help",
      "D": "Lock object"
    },
    "answer": "B",
    "explanation": "A data element defines semantic information and refers to a domain for technical attributes."
  },
  {
    "id": 6,
    "topic": "ABAP Dictionary",
    "question": "What does a domain primarily define?",
    "options": {
      "A": "Business meaning only",
      "B": "Technical properties such as data type and length",
      "C": "Database authorization",
      "D": "Program flow"
    },
    "answer": "B",
    "explanation": "Domains define technical characteristics such as data type, length, decimals, and possible fixed values."
  },
  {
    "id": 7,
    "topic": "ABAP Dictionary",
    "question": "Which Dictionary object is used to define relationships between database tables for input checks and documentation?",
    "options": {
      "A": "Foreign key",
      "B": "Package",
      "C": "Message class",
      "D": "Transaction code"
    },
    "answer": "A",
    "explanation": "A foreign key defines a relationship between fields, commonly for check-table validation."
  },
  {
    "id": 8,
    "topic": "ABAP Dictionary",
    "question": "Which object can provide F4 input help for a field?",
    "options": {
      "A": "Search help",
      "B": "Lock object",
      "C": "View cluster",
      "D": "Package"
    },
    "answer": "A",
    "explanation": "Search helps provide input help."
  },
  {
    "id": 9,
    "topic": "ABAP Dictionary",
    "question": "What is a transparent table in ABAP Dictionary?",
    "options": {
      "A": "A table stored only in memory",
      "B": "A Dictionary table with a corresponding physical database table",
      "C": "A temporary internal table",
      "D": "A table containing only text"
    },
    "answer": "B",
    "explanation": "A transparent table has a corresponding table in the underlying database."
  },
  {
    "id": 10,
    "topic": "ABAP Dictionary",
    "question": "Which Dictionary object is used to define database locking logic?",
    "options": {
      "A": "Lock object",
      "B": "Search help",
      "C": "Data element",
      "D": "Structure"
    },
    "answer": "A",
    "explanation": "Lock objects generate enqueue/dequeue function modules for logical locking."
  },
  {
    "id": 11,
    "topic": "Data Objects",
    "question": "Which declaration is an inline declaration?",
    "options": {
      "A": "DATA lv_name TYPE string.",
      "B": "DATA(lv_name) = 'SAP'.",
      "C": "TYPES lv_name TYPE string.",
      "D": "FIELD-SYMBOLS <name> TYPE string."
    },
    "answer": "B",
    "explanation": "DATA(...) in a suitable operand position creates an inline-declared variable."
  },
  {
    "id": 12,
    "topic": "Data Objects",
    "question": "What is a key advantage of inline declarations?",
    "options": {
      "A": "They eliminate all type checking",
      "B": "They let ABAP derive a suitable type from context",
      "C": "They create database tables",
      "D": "They bypass syntax checks"
    },
    "answer": "B",
    "explanation": "Inline declarations reduce boilerplate while retaining ABAP's type system."
  },
  {
    "id": 13,
    "topic": "Data Objects",
    "question": "Which statement creates a field symbol inline in a LOOP?",
    "options": {
      "A": "LOOP AT itab INTO DATA(ls_row).",
      "B": "LOOP AT itab ASSIGNING FIELD-SYMBOL(<ls_row>).",
      "C": "LOOP itab FIELD <ls_row>.",
      "D": "LOOP AT itab USING <ls_row>."
    },
    "answer": "B",
    "explanation": "FIELD-SYMBOLS(...) can be declared inline in suitable ASSIGNING positions."
  },
  {
    "id": 14,
    "topic": "Data Objects",
    "question": "Which predefined ABAP type is suitable for character strings with variable length?",
    "options": {
      "A": "c",
      "B": "n",
      "C": "string",
      "D": "d"
    },
    "answer": "C",
    "explanation": "STRING is a dynamically sized character string type."
  },
  {
    "id": 15,
    "topic": "Data Objects",
    "question": "What does the VALUE constructor operator do?",
    "options": {
      "A": "Deletes an object",
      "B": "Constructs a value of a specified or inferred type",
      "C": "Commits a database transaction",
      "D": "Starts a debugger"
    },
    "answer": "B",
    "explanation": "VALUE constructs data objects, structures, and internal tables."
  },
  {
    "id": 16,
    "topic": "Open SQL",
    "question": "Which statement is used to read rows from a database table in modern ABAP SQL?",
    "options": {
      "A": "SELECT",
      "B": "READ DATABASE",
      "C": "FETCH TABLE",
      "D": "GET TABLE"
    },
    "answer": "A",
    "explanation": "SELECT is the Open SQL statement for database reads."
  },
  {
    "id": 17,
    "topic": "Open SQL",
    "question": "Why is Open SQL preferred over database-specific SQL in ABAP applications?",
    "options": {
      "A": "It only works on HANA",
      "B": "It is database-independent and integrated with the ABAP runtime",
      "C": "It bypasses authorization checks",
      "D": "It prevents all performance issues"
    },
    "answer": "B",
    "explanation": "Open SQL provides a database-independent abstraction and ABAP integration."
  },
  {
    "id": 18,
    "topic": "Open SQL",
    "question": "Which clause limits rows returned by a SELECT?",
    "options": {
      "A": "UP TO",
      "B": "LIMITED BY",
      "C": "ROWS ONLY",
      "D": "MAXIMUM"
    },
    "answer": "A",
    "explanation": "UP TO n ROWS limits the result set."
  },
  {
    "id": 19,
    "topic": "Open SQL",
    "question": "What does SELECT SINGLE generally request?",
    "options": {
      "A": "Every matching row",
      "B": "One matching database row",
      "C": "One internal-table row",
      "D": "A database lock"
    },
    "answer": "B",
    "explanation": "SELECT SINGLE is intended to retrieve a single row matching the specified key/condition."
  },
  {
    "id": 20,
    "topic": "Open SQL",
    "question": "Which addition can sort rows returned by a SELECT?",
    "options": {
      "A": "SORT BY",
      "B": "ORDER BY",
      "C": "SEQUENCE BY",
      "D": "RANK BY"
    },
    "answer": "B",
    "explanation": "ORDER BY specifies the sort order of a result set."
  },
  {
    "id": 21,
    "topic": "Open SQL",
    "question": "Which Open SQL feature can combine data from multiple database sources using a relationship condition?",
    "options": {
      "A": "JOIN",
      "B": "APPEND",
      "C": "COLLECT",
      "D": "CONCATENATE"
    },
    "answer": "A",
    "explanation": "JOIN combines rows from multiple data sources."
  },
  {
    "id": 22,
    "topic": "Open SQL",
    "question": "What is a common performance problem with SELECT inside a LOOP over database data?",
    "options": {
      "A": "It always causes syntax errors",
      "B": "It can cause many database round trips",
      "C": "It automatically creates indexes",
      "D": "It converts all data to XML"
    },
    "answer": "B",
    "explanation": "Repeated database access can create the classic SELECT-in-LOOP performance problem."
  },
  {
    "id": 23,
    "topic": "Open SQL",
    "question": "Which approach is generally preferable when all required data can be retrieved in one database operation?",
    "options": {
      "A": "Repeated SELECT in a loop",
      "B": "A set-based SELECT",
      "C": "CALL TRANSACTION repeatedly",
      "D": "WRITE statements"
    },
    "answer": "B",
    "explanation": "Set-based database access usually reduces round trips and lets the database optimize the operation."
  },
  {
    "id": 24,
    "topic": "Open SQL",
    "question": "Which expression is used to remove duplicate rows from a result set?",
    "options": {
      "A": "DISTINCT",
      "B": "UNIQUE ROWS",
      "C": "DEDUP",
      "D": "ONLY ONCE"
    },
    "answer": "A",
    "explanation": "DISTINCT removes duplicate result rows."
  },
  {
    "id": 25,
    "topic": "Open SQL",
    "question": "Which statement changes existing database rows?",
    "options": {
      "A": "UPDATE",
      "B": "CHANGE TABLE",
      "C": "MODIFY SQL ONLY",
      "D": "ALTER ROW"
    },
    "answer": "A",
    "explanation": "UPDATE changes existing rows according to its WHERE condition."
  },
  {
    "id": 26,
    "topic": "Modularization",
    "question": "Which modularization unit can be called with PERFORM?",
    "options": {
      "A": "Subroutine (FORM)",
      "B": "Function module only",
      "C": "Class method only",
      "D": "CDS view"
    },
    "answer": "A",
    "explanation": "FORM routines are called with PERFORM."
  },
  {
    "id": 27,
    "topic": "Modularization",
    "question": "Which modularization unit is managed in a function group?",
    "options": {
      "A": "Function module",
      "B": "FORM only",
      "C": "CDS entity",
      "D": "Database index"
    },
    "answer": "A",
    "explanation": "Function modules belong to function groups."
  },
  {
    "id": 28,
    "topic": "Modularization",
    "question": "What is a main advantage of modularization?",
    "options": {
      "A": "It makes all code global",
      "B": "It improves reuse, readability, and maintainability",
      "C": "It disables testing",
      "D": "It removes the need for types"
    },
    "answer": "B",
    "explanation": "Breaking logic into units improves structure and reuse."
  },
  {
    "id": 29,
    "topic": "Modularization",
    "question": "Which ABAP construct is intended for reusable object-oriented behavior?",
    "options": {
      "A": "Method",
      "B": "Selection option",
      "C": "Domain",
      "D": "Search help"
    },
    "answer": "A",
    "explanation": "Methods encapsulate reusable behavior in classes."
  },
  {
    "id": 30,
    "topic": "Modularization",
    "question": "What is an INCLUDE program mainly used for?",
    "options": {
      "A": "To include reusable source code in another program",
      "B": "To create database locks",
      "C": "To define a HANA schema",
      "D": "To replace all function modules"
    },
    "answer": "A",
    "explanation": "Includes allow source-code modularization and reuse within programs."
  },
  {
    "id": 31,
    "topic": "Selection Screens",
    "question": "Which statement defines a parameter on a selection screen?",
    "options": {
      "A": "PARAMETERS p_bukrs TYPE bukrs.",
      "B": "INPUT p_bukrs.",
      "C": "SCREEN PARAM p_bukrs.",
      "D": "SELECT PARAM p_bukrs."
    },
    "answer": "A",
    "explanation": "PARAMETERS defines an elementary input field on the selection screen."
  },
  {
    "id": 32,
    "topic": "Selection Screens",
    "question": "Which statement defines a range/select-option?",
    "options": {
      "A": "SELECT-OPTIONS s_bukrs FOR bkpf-bukrs.",
      "B": "RANGES-ONLY s_bukrs.",
      "C": "RANGE PARAM s_bukrs.",
      "D": "SELECT RANGE s_bukrs."
    },
    "answer": "A",
    "explanation": "SELECT-OPTIONS creates a selection table with low/high and sign/option."
  },
  {
    "id": 33,
    "topic": "Selection Screens",
    "question": "Which event is used to process selection-screen input before START-OF-SELECTION?",
    "options": {
      "A": "AT SELECTION-SCREEN",
      "B": "TOP-OF-PAGE",
      "C": "END-OF-SELECTION",
      "D": "INITIALIZATION ONLY"
    },
    "answer": "A",
    "explanation": "AT SELECTION-SCREEN is used for validation and processing of selection-screen input."
  },
  {
    "id": 34,
    "topic": "Selection Screens",
    "question": "Which event is commonly used to provide default values before the selection screen is displayed?",
    "options": {
      "A": "INITIALIZATION",
      "B": "START-OF-SELECTION",
      "C": "END-OF-SELECTION",
      "D": "TOP-OF-PAGE"
    },
    "answer": "A",
    "explanation": "INITIALIZATION runs before the selection screen and is commonly used for defaults."
  },
  {
    "id": 35,
    "topic": "Selection Screens",
    "question": "Which addition makes a parameter a checkbox?",
    "options": {
      "A": "AS CHECKBOX",
      "B": "CHECKED ONLY",
      "C": "WITH CHECK",
      "D": "BOXED"
    },
    "answer": "A",
    "explanation": "PARAMETERS ... AS CHECKBOX creates a checkbox."
  },
  {
    "id": 36,
    "topic": "Reporting",
    "question": "Which event is normally the main processing event after selection-screen processing?",
    "options": {
      "A": "START-OF-SELECTION",
      "B": "LOAD-OF-PROGRAM",
      "C": "TOP-OF-PAGE",
      "D": "AT LINE-SELECTION"
    },
    "answer": "A",
    "explanation": "START-OF-SELECTION is the standard main processing event."
  },
  {
    "id": 37,
    "topic": "Reporting",
    "question": "Which statement writes output to a classical list?",
    "options": {
      "A": "WRITE",
      "B": "DISPLAY",
      "C": "PRINTLINE",
      "D": "LIST-OUT"
    },
    "answer": "A",
    "explanation": "WRITE produces classical list output."
  },
  {
    "id": 38,
    "topic": "Reporting",
    "question": "Which event can be triggered when a user double-clicks a classical list line?",
    "options": {
      "A": "AT LINE-SELECTION",
      "B": "AT USER-COMMAND ONLY",
      "C": "AT NEW-PAGE",
      "D": "ON DOUBLECLICK"
    },
    "answer": "A",
    "explanation": "AT LINE-SELECTION handles line-selection actions such as double-clicks in classical lists."
  },
  {
    "id": 39,
    "topic": "Reporting",
    "question": "Which statement is used to define a user command in a classical list?",
    "options": {
      "A": "SET USER-COMMAND",
      "B": "ADD COMMAND",
      "C": "DEFINE FUNCTION",
      "D": "CREATE USER COMMAND"
    },
    "answer": "A",
    "explanation": "SET USER-COMMAND assigns a function code to the current list interaction."
  },
  {
    "id": 40,
    "topic": "Reporting",
    "question": "What is an interactive report primarily intended to provide?",
    "options": {
      "A": "User-driven navigation from list output to more detail",
      "B": "Database administration",
      "C": "ABAP compilation",
      "D": "Transport management"
    },
    "answer": "A",
    "explanation": "Interactive reporting lets users navigate and react to list selections."
  },
  {
    "id": 41,
    "topic": "Function Modules",
    "question": "Which transaction is used to create and maintain function modules?",
    "options": {
      "A": "SE37",
      "B": "SE11",
      "C": "SE80",
      "D": "ST22"
    },
    "answer": "A",
    "explanation": "SE37 is the Function Builder transaction."
  },
  {
    "id": 42,
    "topic": "Function Modules",
    "question": "What is a function group?",
    "options": {
      "A": "A container for related function modules and their global data",
      "B": "A database schema",
      "C": "A transport request",
      "D": "A selection screen"
    },
    "answer": "A",
    "explanation": "Function groups contain related function modules and supporting global declarations."
  },
  {
    "id": 43,
    "topic": "Function Modules",
    "question": "Which parameter type is used to pass data into a function module?",
    "options": {
      "A": "IMPORTING",
      "B": "DISPLAYING",
      "C": "SELECTING",
      "D": "READONLY"
    },
    "answer": "A",
    "explanation": "IMPORTING parameters receive values from the caller."
  },
  {
    "id": 44,
    "topic": "Function Modules",
    "question": "Which parameter type is used to return values from a function module to its caller?",
    "options": {
      "A": "EXPORTING",
      "B": "SCREENING",
      "C": "SELECT-OPTIONS",
      "D": "EVENTING"
    },
    "answer": "A",
    "explanation": "EXPORTING parameters pass values from the function module to the caller."
  },
  {
    "id": 45,
    "topic": "Function Modules",
    "question": "What is the purpose of an EXCEPTIONS section in a classic function module interface?",
    "options": {
      "A": "Define named classic exceptions that can be raised",
      "B": "Define database indexes",
      "C": "Create classes",
      "D": "Create selection options"
    },
    "answer": "A",
    "explanation": "Classic function modules can define named exceptions in their interface."
  },
  {
    "id": 46,
    "topic": "Enhancements",
    "question": "What is a BAdI?",
    "options": {
      "A": "A Business Add-In enhancement technique based on object-oriented concepts",
      "B": "A database table",
      "C": "A report event",
      "D": "A transport type"
    },
    "answer": "A",
    "explanation": "BAdIs provide enhancement points using object-oriented interfaces/classes."
  },
  {
    "id": 47,
    "topic": "Enhancements",
    "question": "What is a customer exit?",
    "options": {
      "A": "A predefined enhancement location intended for customer-specific logic",
      "B": "A database backup",
      "C": "A HANA calculation view",
      "D": "A transport request"
    },
    "answer": "A",
    "explanation": "A customer exit is a predefined enhancement location intended for customer-specific customer logic."
  },
  {
    "id": 48,
    "topic": "Enhancements",
    "question": "Which transaction is commonly associated with the Enhancement Framework and enhancement implementations?",
    "options": {
      "A": "SE20",
      "B": "SE38",
      "C": "SM37",
      "D": "STMS"
    },
    "answer": "A",
    "explanation": "SE20 is used for enhancement framework-related administration."
  },
  {
    "id": 49,
    "topic": "Enhancements",
    "question": "What is the key benefit of enhancement techniques over modifying SAP standard code?",
    "options": {
      "A": "They preserve standard code and improve upgrade compatibility",
      "B": "They disable transports",
      "C": "They remove authorization checks",
      "D": "They require no testing"
    },
    "answer": "A",
    "explanation": "Enhancements allow customer logic without directly modifying standard SAP source."
  },
  {
    "id": 50,
    "topic": "Enhancements",
    "question": "A BAdI is generally based on which concept?",
    "options": {
      "A": "Interface and implementing class",
      "B": "Database trigger only",
      "C": "Selection option",
      "D": "FORM routine only"
    },
    "answer": "A",
    "explanation": "BAdIs use an interface and implementation classes."
  },
  {
    "id": 51,
    "topic": "OOP ABAP",
    "question": "Which keyword starts a class definition in ABAP Objects?",
    "options": {
      "A": "CLASS",
      "B": "OBJECT",
      "C": "DEFINE CLASS",
      "D": "BEGIN CLASS"
    },
    "answer": "A",
    "explanation": "ABAP class definitions start with CLASS ... DEFINITION."
  },
  {
    "id": 52,
    "topic": "OOP ABAP",
    "question": "Which visibility section allows access only within the class and its friends?",
    "options": {
      "A": "PRIVATE",
      "B": "PUBLIC",
      "C": "GLOBAL",
      "D": "EXTERNAL"
    },
    "answer": "A",
    "explanation": "PRIVATE members are restricted to the class context (subject to ABAP visibility rules such as friends)."
  },
  {
    "id": 53,
    "topic": "OOP ABAP",
    "question": "What is inheritance?",
    "options": {
      "A": "A subclass reuses and specializes behavior/data from a superclass",
      "B": "Copying a database table",
      "C": "Creating a function module",
      "D": "Converting Open SQL to Native SQL"
    },
    "answer": "A",
    "explanation": "Inheritance allows a subclass to derive from a superclass."
  },
  {
    "id": 54,
    "topic": "OOP ABAP",
    "question": "What is polymorphism?",
    "options": {
      "A": "The same interface/reference can work with different concrete implementations",
      "B": "A way to lock tables",
      "C": "A way to create domains",
      "D": "A method of sorting internal tables"
    },
    "answer": "A",
    "explanation": "Polymorphism allows code to operate through a common type while behavior depends on the actual object."
  },
  {
    "id": 55,
    "topic": "OOP ABAP",
    "question": "Which ABAP keyword is used to instantiate an object?",
    "options": {
      "A": "CREATE OBJECT",
      "B": "NEW OBJECT ONLY",
      "C": "MAKE OBJECT",
      "D": "INSTANCE"
    },
    "answer": "A",
    "explanation": "CREATE OBJECT is the classic instantiation statement; NEW is the modern constructor operator."
  },
  {
    "id": 56,
    "topic": "ABAP Test",
    "question": "Which framework is used for unit tests in ABAP Objects?",
    "options": {
      "A": "ABAP Unit",
      "B": "SAPscript",
      "C": "Smart Forms",
      "D": "STMS"
    },
    "answer": "A",
    "explanation": "ABAP Unit provides integrated unit testing for ABAP."
  },
  {
    "id": 57,
    "topic": "ABAP Test",
    "question": "Which class is commonly used as the superclass for ABAP Unit test classes?",
    "options": {
      "A": "CL_ABAP_UNIT_ASSERT",
      "B": "CL_TEST_BASE",
      "C": "CL_UNIT",
      "D": "CL_ABAP_TEST"
    },
    "answer": "A",
    "explanation": "ABAP Unit uses CL_ABAP_UNIT_ASSERT for assertions; test classes are declared with FOR TESTING."
  },
  {
    "id": 58,
    "topic": "ABAP Test",
    "question": "Which addition marks a method as a test method in ABAP Unit?",
    "options": {
      "A": "FOR TESTING",
      "B": "TEST METHOD",
      "C": "UNIT TEST",
      "D": "ASSERT METHOD"
    },
    "answer": "A",
    "explanation": "Test methods are declared with FOR TESTING."
  },
  {
    "id": 59,
    "topic": "ABAP Test",
    "question": "What should a unit test primarily verify?",
    "options": {
      "A": "A small unit of application behavior in isolation",
      "B": "The entire production landscape",
      "C": "Network bandwidth",
      "D": "Transport routes"
    },
    "answer": "A",
    "explanation": "Unit tests focus on small, testable units of behavior."
  },
  {
    "id": 60,
    "topic": "ABAP Test",
    "question": "Why are test doubles useful?",
    "options": {
      "A": "They isolate the unit under test from dependencies",
      "B": "They increase database size",
      "C": "They replace syntax checking",
      "D": "They create SAP users"
    },
    "answer": "A",
    "explanation": "Test doubles simulate dependencies to make tests deterministic and isolated."
  },
  {
    "id": 61,
    "topic": "Adobe Forms",
    "question": "Which transaction is used to maintain Adobe Forms in SAP?",
    "options": {
      "A": "SFP",
      "B": "SE37",
      "C": "SMARTFORMS",
      "D": "SO10"
    },
    "answer": "A",
    "explanation": "SFP is the Form Builder transaction for Adobe Forms."
  },
  {
    "id": 62,
    "topic": "Adobe Forms",
    "question": "Adobe Forms typically use which technology for form layout?",
    "options": {
      "A": "Adobe PDF-based form technology",
      "B": "Classical list only",
      "C": "SAPscript only",
      "D": "HTML mail only"
    },
    "answer": "A",
    "explanation": "SAP Adobe Forms use Adobe form technology and PDF rendering."
  },
  {
    "id": 63,
    "topic": "Smart Forms",
    "question": "Which transaction is used to maintain Smart Forms?",
    "options": {
      "A": "SMARTFORMS",
      "B": "SFP",
      "C": "SE71",
      "D": "SE37"
    },
    "answer": "A",
    "explanation": "SMARTFORMS is the transaction for Smart Forms."
  },
  {
    "id": 64,
    "topic": "SAPscript",
    "question": "Which transaction is associated with SAPscript form maintenance?",
    "options": {
      "A": "SE71",
      "B": "SFP",
      "C": "SMARTFORMS",
      "D": "SE11"
    },
    "answer": "A",
    "explanation": "SE71 is used for SAPscript forms."
  },
  {
    "id": 65,
    "topic": "Forms",
    "question": "What is a key reason to use forms technologies in SAP?",
    "options": {
      "A": "Generate formatted business documents for printing or output",
      "B": "Create database indexes",
      "C": "Manage Linux processes",
      "D": "Compile HANA SQLScript"
    },
    "answer": "A",
    "explanation": "Forms are used to produce formatted documents such as invoices and purchase orders."
  },
  {
    "id": 66,
    "topic": "In-App Extensibility",
    "question": "What is the main goal of in-app extensibility?",
    "options": {
      "A": "Adapt SAP applications within supported extension capabilities without modifying standard code",
      "B": "Replace the database",
      "C": "Disable upgrades",
      "D": "Write kernel code"
    },
    "answer": "A",
    "explanation": "In-app extensibility supports supported adaptations within the application."
  },
  {
    "id": 67,
    "topic": "In-App Extensibility",
    "question": "Which principle is central to clean-core development?",
    "options": {
      "A": "Keep the SAP standard as untouched as possible and use released extension mechanisms",
      "B": "Modify SAP standard directly",
      "C": "Avoid APIs",
      "D": "Put all custom logic in the kernel"
    },
    "answer": "A",
    "explanation": "Clean core emphasizes released APIs and extension points instead of modifications."
  },
  {
    "id": 68,
    "topic": "Debugging",
    "question": "Which transaction is commonly used to execute and debug an ABAP program?",
    "options": {
      "A": "SE38",
      "B": "SE11",
      "C": "SE37",
      "D": "SM50"
    },
    "answer": "A",
    "explanation": "SE38 can execute and debug ABAP reports."
  },
  {
    "id": 69,
    "topic": "Debugging",
    "question": "What is a breakpoint?",
    "options": {
      "A": "A point where program execution can pause for debugging",
      "B": "A database index",
      "C": "A transport lock",
      "D": "A form window"
    },
    "answer": "A",
    "explanation": "Breakpoints pause execution so runtime state can be inspected."
  },
  {
    "id": 70,
    "topic": "Debugging",
    "question": "What is a watchpoint used for?",
    "options": {
      "A": "Pause execution when a specified data value changes or meets a condition",
      "B": "Create a database table",
      "C": "Start a background job",
      "D": "Generate a form"
    },
    "answer": "A",
    "explanation": "Watchpoints stop execution when the monitored condition becomes true."
  },
  {
    "id": 71,
    "topic": "Debugging",
    "question": "Which transaction can be used to analyze ABAP runtime errors/dumps?",
    "options": {
      "A": "ST22",
      "B": "SM37",
      "C": "SE16",
      "D": "SFP"
    },
    "answer": "A",
    "explanation": "ST22 displays ABAP short dumps."
  },
  {
    "id": 72,
    "topic": "RAP",
    "question": "What does RAP stand for in SAP ABAP?",
    "options": {
      "A": "RESTful Application Programming Model",
      "B": "Remote ABAP Processing",
      "C": "Rapid Application Program",
      "D": "REST ABAP Protocol"
    },
    "answer": "A",
    "explanation": "RAP is SAP's RESTful Application Programming Model."
  },
  {
    "id": 73,
    "topic": "RAP",
    "question": "Which artifact commonly defines the semantic data model in RAP?",
    "options": {
      "A": "CDS view entity",
      "B": "Smart Form",
      "C": "Function group",
      "D": "Selection screen"
    },
    "answer": "A",
    "explanation": "CDS view entities are central to RAP data modeling."
  },
  {
    "id": 74,
    "topic": "RAP",
    "question": "What is a behavior definition in RAP used for?",
    "options": {
      "A": "Define transactional behavior such as create, update, delete, actions, and validations",
      "B": "Define printer layouts",
      "C": "Define Linux permissions",
      "D": "Define database backups"
    },
    "answer": "A",
    "explanation": "Behavior definitions describe transactional behavior of RAP business objects."
  },
  {
    "id": 75,
    "topic": "RAP",
    "question": "What is a service definition in RAP?",
    "options": {
      "A": "It defines which data/behavior entities are exposed as a service",
      "B": "It defines a database index",
      "C": "It defines a function group",
      "D": "It defines a GUI status"
    },
    "answer": "A",
    "explanation": "Service definitions select the entities to be exposed."
  },
  {
    "id": 76,
    "topic": "RAP",
    "question": "What is a service binding used for?",
    "options": {
      "A": "Bind a service definition to a communication protocol/runtime such as OData",
      "B": "Create a database table",
      "C": "Define a selection screen",
      "D": "Run ABAP Unit"
    },
    "answer": "A",
    "explanation": "Service bindings expose RAP services using a chosen protocol such as OData V4."
  },
  {
    "id": 77,
    "topic": "RAP",
    "question": "Which protocol is commonly used to expose RAP services?",
    "options": {
      "A": "OData",
      "B": "FTP",
      "C": "SMTP",
      "D": "SNMP"
    },
    "answer": "A",
    "explanation": "RAP commonly exposes services using OData, especially OData V4."
  },
  {
    "id": 78,
    "topic": "RAP",
    "question": "What is a determination in RAP?",
    "options": {
      "A": "Logic that derives or adjusts data based on defined transactional events",
      "B": "A database index",
      "C": "A print form",
      "D": "A user role"
    },
    "answer": "A",
    "explanation": "Determinations derive or modify data in response to behavior processing."
  },
  {
    "id": 79,
    "topic": "RAP",
    "question": "What is a validation in RAP?",
    "options": {
      "A": "Logic that checks whether data is valid before a transactional operation proceeds",
      "B": "A UI theme",
      "C": "A database backup",
      "D": "A transport layer"
    },
    "answer": "A",
    "explanation": "Validations check business consistency and can prevent invalid transactions."
  },
  {
    "id": 80,
    "topic": "RAP",
    "question": "What is a RAP action?",
    "options": {
      "A": "A business operation explicitly triggered by a consumer",
      "B": "A database trigger",
      "C": "A selection option",
      "D": "A function group"
    },
    "answer": "A",
    "explanation": "Actions represent explicit business operations beyond standard CRUD."
  },
  {
    "id": 81,
    "topic": "SAP Joule",
    "question": "In the SAP development context, what is Joule?",
    "options": {
      "A": "SAP's generative AI copilot/assistant experience",
      "B": "A database engine",
      "C": "A transport protocol",
      "D": "A form designer"
    },
    "answer": "A",
    "explanation": "Joule is SAP's generative AI assistant integrated into SAP experiences."
  },
  {
    "id": 82,
    "topic": "BTP",
    "question": "What does SAP BTP stand for?",
    "options": {
      "A": "SAP Business Technology Platform",
      "B": "SAP Business Transaction Protocol",
      "C": "SAP Base Transport Package",
      "D": "SAP Business Testing Program"
    },
    "answer": "A",
    "explanation": "BTP stands for SAP Business Technology Platform."
  },
  {
    "id": 83,
    "topic": "BTP",
    "question": "Which capability is commonly associated with SAP BTP?",
    "options": {
      "A": "Application development, integration, data and analytics, and AI services",
      "B": "Only payroll processing",
      "C": "Only ABAP syntax checking",
      "D": "Only printer management"
    },
    "answer": "A",
    "explanation": "BTP provides services across application development, integration, data/analytics, and AI."
  },
  {
    "id": 84,
    "topic": "BTP",
    "question": "What is SAP Build Launchpad primarily used for?",
    "options": {
      "A": "Providing a central entry point to business applications",
      "B": "Running database backups",
      "C": "Compiling ABAP",
      "D": "Creating SAPscript forms"
    },
    "answer": "A",
    "explanation": "Launchpad provides a unified access point for applications and content."
  },
  {
    "id": 85,
    "topic": "Side-by-Side",
    "question": "What does side-by-side extensibility generally mean?",
    "options": {
      "A": "Building extensions outside the core SAP application, often on SAP BTP",
      "B": "Modifying SAP kernel source",
      "C": "Changing SAP standard tables directly",
      "D": "Creating a local printer queue"
    },
    "answer": "A",
    "explanation": "Side-by-side extensions are decoupled from the core and often run on BTP."
  },
  {
    "id": 86,
    "topic": "Side-by-Side",
    "question": "Why is side-by-side extensibility useful for clean core?",
    "options": {
      "A": "It reduces custom code inside the SAP core",
      "B": "It requires more modifications",
      "C": "It disables APIs",
      "D": "It prevents integration"
    },
    "answer": "A",
    "explanation": "External extensions keep custom functionality decoupled from the core."
  },
  {
    "id": 87,
    "topic": "Performance",
    "question": "Which transaction is used for SQL Trace in ABAP systems?",
    "options": {
      "A": "ST05",
      "B": "ST22",
      "C": "SM37",
      "D": "SE71"
    },
    "answer": "A",
    "explanation": "ST05 provides SQL trace and other trace functions."
  },
  {
    "id": 88,
    "topic": "Performance",
    "question": "Which tool is used to analyze ABAP runtime performance at the program/code level?",
    "options": {
      "A": "SAT",
      "B": "SFP",
      "C": "SE71",
      "D": "SM59"
    },
    "answer": "A",
    "explanation": "SAT is the ABAP Runtime Analysis tool."
  },
  {
    "id": 89,
    "topic": "Performance",
    "question": "What is the main purpose of ST05?",
    "options": {
      "A": "Trace database access and other selected system interactions",
      "B": "Create classes",
      "C": "Maintain forms",
      "D": "Manage users"
    },
    "answer": "A",
    "explanation": "ST05 can trace SQL/database activity and related interactions."
  },
  {
    "id": 90,
    "topic": "Performance",
    "question": "Why can SELECT * be undesirable when only a few columns are needed?",
    "options": {
      "A": "It can transfer and process unnecessary data",
      "B": "It always causes a syntax error",
      "C": "It creates a new table",
      "D": "It disables indexes"
    },
    "answer": "A",
    "explanation": "Selecting only required columns can reduce data transfer and processing."
  },
  {
    "id": 91,
    "topic": "Performance",
    "question": "What is a common goal of performance tuning?",
    "options": {
      "A": "Reduce runtime and resource consumption while preserving correctness",
      "B": "Remove all indexes",
      "C": "Avoid all database access",
      "D": "Increase code complexity"
    },
    "answer": "A",
    "explanation": "Performance tuning aims for efficient resource use without changing intended behavior."
  },
  {
    "id": 92,
    "topic": "Performance",
    "question": "What can an SQL trace help identify?",
    "options": {
      "A": "Expensive or repeated database statements",
      "B": "Only UI colors",
      "C": "Only user passwords",
      "D": "Only transport owners"
    },
    "answer": "A",
    "explanation": "Trace data helps identify SQL statements and database access patterns that may need optimization."
  },
  {
    "id": 93,
    "topic": "ATC",
    "question": "What does ATC stand for in SAP development?",
    "options": {
      "A": "ABAP Test Cockpit",
      "B": "Advanced Transport Controller",
      "C": "ABAP Transaction Compiler",
      "D": "Application Table Checker"
    },
    "answer": "A",
    "explanation": "ATC is the ABAP Test Cockpit for static checks and quality analysis."
  },
  {
    "id": 94,
    "topic": "ATC",
    "question": "What type of issues can ATC identify?",
    "options": {
      "A": "Static code quality, syntax-related, performance, and clean-core relevant findings depending on checks",
      "B": "Only printer errors",
      "C": "Only network failures",
      "D": "Only database backups"
    },
    "answer": "A",
    "explanation": "ATC runs static checks and can identify many categories of code issues."
  },
  {
    "id": 95,
    "topic": "Remote Assessment",
    "question": "What is the purpose of remote assessment in SAP development governance?",
    "options": {
      "A": "Assess code quality and compliance remotely using defined tools/checks",
      "B": "Replace all developers",
      "C": "Create invoices",
      "D": "Manage printers"
    },
    "answer": "A",
    "explanation": "Remote assessment supports centralized or remote evaluation of development quality and compliance."
  },
  {
    "id": 96,
    "topic": "Open SQL",
    "question": "Which clause is used to restrict rows based on a condition?",
    "options": {
      "A": "WHERE",
      "B": "WHEN",
      "C": "FILTER ONLY",
      "D": "CHECK"
    },
    "answer": "A",
    "explanation": "WHERE filters rows according to a condition."
  },
  {
    "id": 97,
    "topic": "Open SQL",
    "question": "Which operation combines rows from two compatible internal tables into one table in ABAP?",
    "options": {
      "A": "APPEND",
      "B": "JOIN DATABASE",
      "C": "MERGE SQL",
      "D": "UNION TABLE"
    },
    "answer": "A",
    "explanation": "APPEND can add rows from one internal table to another; database UNION is a different SQL concept."
  },
  {
    "id": 98,
    "topic": "ABAP Dictionary",
    "question": "Which object is used to define a reusable structured type without necessarily creating a database table?",
    "options": {
      "A": "Structure",
      "B": "Lock object",
      "C": "Search help",
      "D": "Table pool"
    },
    "answer": "A",
    "explanation": "Structures define reusable data structures and can be used in programs and Dictionary objects."
  },
  {
    "id": 99,
    "topic": "OOP ABAP",
    "question": "Which principle hides implementation details behind a defined interface?",
    "options": {
      "A": "Encapsulation",
      "B": "Inheritance only",
      "C": "Compilation",
      "D": "Serialization"
    },
    "answer": "A",
    "explanation": "Encapsulation groups data and behavior and controls access to implementation details."
  },
  {
    "id": 100,
    "topic": "RAP",
    "question": "In RAP, what is a projection view used for?",
    "options": {
      "A": "Define a consumer-facing projection of the underlying business object model",
      "B": "Create a printer form",
      "C": "Replace the database schema",
      "D": "Store user passwords"
    },
    "answer": "A",
    "explanation": "Projection views expose a tailored subset/model for a specific service or use case."
  }
];