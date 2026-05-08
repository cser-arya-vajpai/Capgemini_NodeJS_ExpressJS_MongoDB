
// ============================================================
//                     1. INTRODUCTION
// ============================================================

//? WHAT IS DATA IN MONGODB?
// In mongodb ,Data is the information stored inisde the database
//in the form of document-oriented rather than rows and columns

//IN momgoDB ,data is stored as JSON,,,,i.e in the form of BSON
//IT will as in the OBject-->in the form of KEY-VALUE pairs
// example:---
// {
//     Student:"Arun",
//     clgName:"ABC"
// }


//? DATABASES
//DAtabase is used to store the data,organised,ACcess the  data

//! TYpes oF DATABAses
//RDBMS,NON RDBMS,OBJECT ORIENTED,NETWORK,HIERARCHIAL,ETC

//?1.RDBMS:--RELATIONAL DATABASE MANAGEMENT SYSTEM 
// IT WILL STORE THE DATA IN THE FORM OF TABLE(ROWS+COLUMNS)
// IT USES SQL TO COMMUNICATE/INTERACT WITH DATABASES
// EXAMPLES:---ORCALE,MYSQL,POSTGRESQL,SQLSERVER,ETC


//? 2.NON RDBMS(NON RELATIONAL DATABASE MANAGEMENT SYSTEM):---
// IT WILL STORE AND HANDLE THE STRUCTURED,UNSTRUCTURED,SEMI-SRUCTURED DATA
// IT WILL OFFERS FLEXIBITLITY,SCALABILITY AND HIGH PERFORMANCE
// IT WILL USE NOSQL--->NOT ONLY SQL

//! CHARACTERSTICS:--
// 1.FLEXIBITLITY
// 2.SCHEMA-LESS DATABASES
// 3.DISTRIBUTED ARCHITECTURE
// 4.HIGH AVAILABILITY


//! TYPES OF NOSQL:----
/*

FOUR TYPES:---
1.DOCUMENT BASED:--STORES THE DATA IN THE FORM JSON LIKE STRUCTURE
EX:--MongoDb,CouchDB

2.key -value based:--stores the data in the form of key-value pairs.keys--attributes/fields
ex:--Redis,DynamoDB

3.column-Family BAsed:--stores the data in the form of columns ,not relies on rows
ex:--Cassandra,Hbase

4.Graph-DB:-Stores the data in the form of Graphs(Nodes+edges).
            Edges are like relationships between Nodes(ENd-points)
    ex:--Neo4j,ArrangoDb
*/

//! differences between SQL & NOSQL:--
/*
1.SQL:---
-->STORES AS TABLE
-->SCHEMA FIXED
-->VERTICAL scaling
-->STRUCTURED DATA TYPES
-->LANGUAGE USED --SQL
-->RELATIONSHIPS AS JOINS,STRONG RELATIONSHIPS,COMPLEXITY LEVELS ARE HIGH
-->IT SUPPORTS ACID PROPERTIES
-->STORAGE--->ONE SERVER

2.NOSQL:--
-->STORES AS JSON,BSON
-->SCHEMA LESS
-->Horizontal scaling
-->UNSTRUCTURED/SEMI STRUCTURED/STRUCTURED DATA TYPES
-->LANGUAGE USED -NO SQL
-->RELATIONSHIPS--NO JOINS,,COMPLEXITY LEVELS ARE LOW
-->IT  WONT SUPPORTS ACID PROPERTIES
-->IT SUPPORTS CAP THEOREM
-->IT OFFERS DISTRIBUTES SERVERS(MULTIPLE SERVERS)
*/


//? MongoDb:---
/*
-
1.It is a document based NOsql DB
2.data is stored as JSON,,,,i.e in the form of BSON(Binary JSON) format
Features/Advantages:-- 
3.It offers schema-less Db
4.IT WILL OFFERS FLEXIBITLITY,Horizontal scaling AND HIGH PERFORMANCE
5.It uses collections(like tables),Documents(like rows)
*/

//?HISTORY OF MONGODB
/*
1.DoubleClick Company -->to produce ads.100,000-->ads are not scalable,
2.then Dwight Merriman,Eliot Harowitz, Kevin Ryan   invented MongoDb in 2007.
3.The First Version of MongoDb is released in 2009
4.The current version of mongoDb is 8.2.1

*/


//! WHAT IS SCALING?
/*
Scaling is used to increase the systems capacity to handler the handle more traffic

TYPES OF SCALING:-----

1.VERTICAL SCALING(SCALE -UP):--
--->INCREASING THE CAPACITY OF SINGLE SERVER ONLY
--->ADDING CPU,RAM,SSD TO SERVER
-->ADVANTAGES:--HIGH AVAILABILTY,NO NEED TO CODE
-->DISADVANTAGE:---HIGH COSTS

2.HORIZONTAL SCALING:---
--->INCREASING THE NUMBER OF  SERVERS TO DISTRIBUTE THE LOAD 
-->ADD MORE MACHINES
-> ADVANTAGE:--LESS COSTS
*/

//! SHARDING  
/*
SHARDING IS THE PROCESS OF SPLITTING THE DATA ACROSS MULTIPLE SERVERS
IT USES HORIZONTAL SCALING
IT WILL USE PARTS(SHARD) TO DIVIDE THE DATA
ADV:--- SERVERS crashed,rest servers wont get impact
*/


//! REPLICATION
/*
REPLICATION CREATES MULTIPLE COPIES  OF DATA ACCROSS DIFFERENT SERVERS BY REPLICA SETS
REPLICA SET:--
            1.PRIMARY NODE---FAILS
            2.SECONDARY NODE---ACTS AS PRIMARY NODE...........SECONDARY NODE..........
ADV:---HIGH AVAILABILTY,FAULT TOLERANCE
DISADV:-REDUNDANCY
*/


//!ACID PROPERTIES
/*--->ATM 
1.A-->ATOMICITY:--- TRANSACTION  WILL COMPLETE FULLY OR NONE 
2.C-->CONSISTENCY:--DATA MUST REMAIN ACCORDING TO RULES.
3.I-->ISOLATION:--EACH TRANSACTION SHOULD EXECUTE INDEPENDENTLY
4.D-->DURABILITY:--ONCE A TRANSACTION IS DONE,THE DATA WILL BE STORED PERMANENTLY
*/



//! CAP THEOREM 
/*
CAP THOEREM GURANTEES ANY TWO OF THE FOLLOWING THREE GUARANTEES:---

1.C-->CONSISTENCY:-- EVERY DATA MUST RECIVES RECENT WRITE
2.A-->AVAILABILITY:-- EVERY REQUEST MUST RECIEVE A RESPONSE
3.P-->PARTITION TOLERANCE:-- SYSTEM MUST PERFORM IF ANY NODE FAILS ALSO

MONGODB PREFERS AP(AVAILABITLITY,PARTITION TOLERANCE),BUT CP CAN BE CONFIGURED

*/


// ============================================================
//                  2. CONNECTING DATABASES
// ============================================================

//? To connect with mongodb shell--->mongosh

//? to clear the screen-->cls

//?to seee dtabases---> show dbs/show databases

//?to create db--->use mongodb

//? to create collection-Explicitly-> db.createCollection("shell")

//?To see collection-->show tables/show collections

//?to create collection -Implicitly-->db.university.insertOne({"name":"mongo"})

//? to drop a db-->db.dropDatabase()


//! Collection:----
// collection(like table in sql)  is a set of documents (rows in sql)
// to store the data in the form key(column/field)-value pairs


db.createCollection("stud details")

// db.stud details.find()//error


//?getCollection()-->access the space/hypen/any special chracters in db name

db.getCollection("stud details").find();


//?rename collection
// stud--->student
db.stud.renameCollection("student")

// stud details-->student_details

db.getCollection("stud details").renameCollection("student_info")

//?to drop collections:---

// 1.to drop student---> 
db.student.drop()
// 2.to drop student_info-->
db.getCollection("student_info").drop()


// ============================================================
//               3. CRUD OPERATIONS - INSERT & FIND
// ============================================================

//!  CRUD OPERATIONS
//C-->CREATE/INSERT
//R-->READ/FETCH
//U-->UPDATE
//D-->DELETE


//1.insert:---

//?i) insert:---depricated,,,,,,
db.customer.insert(
    {
        "name":"Ryan",
        "age":24
    }
)

//?objectId:----
//it is generated by the compiler and also it is default
//This is like primary key(sql)

//?insertOne:---
// it is used to insert first document only
//syntax:--- db.collectionName.insertOne({})
db.customer.insertOne(
    {
        "name":"kevin",
        "age":25
    }
    
)

db.customer.insertOne(
    {
        "name":"kevin",
        "age":25
    },
     {
        "name":"gosling",
        "age":30
    },
)
//?how it works internally:---
// 1. it starts with db,it will search the collectionName
// 2.it will go to the operation(insertOne)
// 3.After the operation,it will insert first document.

//?2.insertMany():--
// it is used to insert multiple document only
//[]-->used to hold multiple objects
//syntax:--- db.collectionName.insertMany({})

db.customer.insertMany([
    {
        "name3":"kevin",
        "age":25,
        
    },
     {
        "name3":"gosling",
        "age":30
    }
]
)

//?inserting dates
db.customer.insertMany([
    {
        "name4":"james",
        "age":25,
        dob:new Date("2025-12-15")
    },
   
]
)

//  {
//     _id: ObjectId('693f780eae0497acc463b129'),
//     name3: 'kevin',
//     age: 25,
//     dob: '2025-12-15'
//   },
//   {
//     _id: ObjectId('693f780eae0497acc463b12a'),
//     name4: 'gosling',
//     age: 30
//   },
//   {
//     _id: ObjectId('693f78bdae0497acc463b12b'),
//     name4: 'james',
//     age: 25,
//     dob: ISODate('2025-12-15T00:00:00.000Z')
//   }



//insert 4 documents-->name,age,clgName,Address-->city,state


//! 2.find():_---
// find method has two further methods
//1.findOne()     2.find()
//in this find(),we can pass filter condition-->optional
// in this find() -->we have totally three arguemnts

//?1.findOne():--
//it is used to get the first matched document
//syntax---db.collectionName.findOne({},{},{})

db.customer.findOne()

db.customer.findOne(
    {
        age:30
    }
)


//find kevin details

//?2.find():---
//it is used to get all matched documents.
//syntax---db.collectionName.find({},{},{})
db.customer.find()
db.customer.find({})


db.customer.find(
    {
        age:25
    }
)

//find kevin details

//! UPDATE --->
//? 1. updateOne
//? 2. updateMany

//syntax---{filter},{update},{options}

db.emp1.insertMany(
    [
        {
            name: "ajay",
            age: 22
        },
        {
            name: "Vijay",
            age: 26
        },
        {
            name: "kumar",
            age: 22
        }
    ]
)
db.emp1.find({}, { _id: 0 })
//! updateOne-->used to update one document
// Atomic operators-->$set-->modifies exitsting value of a field

// UPDATE age of Ajay to 26
db.emp1.updateOne(
    {
        name: "ajay"
    },
    {
        $set: {
            age: 26
        }
    }
)

//it updates first matched document
db.emp1.updateOne(
    {

    },
    {
        $set: {
            age: 22
        }
    }
)

//when you dont have the update field ,
// it will create a new field for the document
db.emp1.updateOne(
    {
        name: "ajay"
    },
    {
        $set: {
            aged: 22
        }
    }
)



//!DELETE---->
//Syntax:-- db.CN.deleteOne({filter})
//! 1.deleteOne-->Deletes only one matched Document

//Delete Ryan documnets in couse Collection
db.course.deleteOne({ s2: "Ryan" })

//
db.course.insertMany([{
    age: 22, name: "Ryan"
}, {
    s1: "Monic",
    age: 23
}])

//! 2.deleteMany-->Deletes all  matched Document

//Delete age:22 documents in course Collection
db.course.deleteMany({ age: 22 })


db.emp.insertMany([
  {
    empno: 7369,
    ename: "smith",
    job: "clerk",
    mgr: 7902,
    hiredate: new Date("1980-12-17"),
    sal: 800,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7499,
    ename: "allen",
    job: "salesman",
    mgr: 7698,
    hiredate: new Date("1981-02-20"),
    sal: 1600,
    comm: 300,
    deptno: 30,
  },
  {
    empno: 7521,
    ename: "ward",
    job: "salesman",
    mgr: 7698,
    hiredate: new Date("1981-02-22"),
    sal: 1250,
    comm: 500,
    deptno: 30,
  },
  {
    empno: 7566,
    ename: "jones",
    job: "manager",
    mgr: 7839,
    hiredate: new Date("1981-04-02"),
    sal: 2975,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7654,
    ename: "martin",
    job: "salesman",
    mgr: 7698,
    hiredate: new Date("1981-09-28"),
    sal: 1250,
    comm: 1400,
    deptno: 30,
  },
  {
    empno: 7698,
    ename: "blake",
    job: "manager",
    mgr: 7839,
    hiredate: new Date("1981-05-01"),
    sal: 2850,
    comm: null,
    deptno: 30,
  },
  {
    empno: 7782,
    ename: "clark",
    job: "manager",
    mgr: 7839,
    hiredate: new Date("1981-06-09"),
    sal: 2450,
    comm: null,
    deptno: 10,
  },
  {
    empno: 7788,
    ename: "scott",
    job: "analyst",
    mgr: 7566,
    hiredate: new Date("1987-04-19"),
    sal: 3000,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7839,
    ename: "king",
    job: "president",
    mgr: null,
    hiredate: new Date("1981-11-17"),
    sal: 5000,
    comm: null,
    deptno: 10,
  },
  {
    empno: 7844,
    ename: "turner",
    job: "salesman",
    mgr: 7698,
    hiredate: new Date("1981-09-08"),
    sal: 1500,
    comm: 0,
    deptno: 30,
  },
  {
    empno: 7876,
    ename: "adams",
    job: "clerk",
    mgr: 7788,
    hiredate: new Date("1987-05-23"),
    sal: 1100,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7900,
    ename: "james",
    job: "clerk",
    mgr: 7698,
    hiredate: new Date("1981-12-03"),
    sal: 950,
    comm: null,
    deptno: 30,
  },
  {
    empno: 7902,
    ename: "ford",
    job: "analyst",
    mgr: 7566,
    hiredate: new Date("1981-12-03"),
    sal: 3000,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7934,
    ename: "miller",
    job: "clerk",
    mgr: 7782,
    hiredate: new Date("1982-01-23"),
    sal: 1300,
    comm: null,
    deptno: 10,
  }
]);


db.dept.insertMany([
  { deptno: 10, dname: "accounting", loc: "new york" },
  { deptno: 20, dname: "research", loc: "dallas" },
  { deptno: 30, dname: "sales", loc: "chicago" },
  { deptno: 40, dname: "operation", loc: "boston" },
]);


// ============================================================
//                     4. PROJECTION
// ============================================================

// get the all details of emp collection
db.emp.find()


//?Distinct:---
//it is used to get the unique/witout duplication of values
//syntax:--db.collectionName.distinct("field_name")
//get unique salaries
db.emp.distinct("sal")
//get unique deptno,mgr
db.emp.distinct("deptno")


//!PROJECTION
//IT IS UseD TO DISPLAY THE DETAILS
//find({filter},{projection},{options})
//PROJECION---->
//WE can include field names using 1,0
//1-->include,0-->exclude

//display ename,salaries
db.emp.find({},{
    ename:1,sal:1
})

db.emp.find({},{
    ename:1,sal:1,_id:0
})

//!ALIAS--
//?it is used to give the alternate name
//?$--->used to point out the values
//sal---->salary
db.emp.find({},{
    ename:1,sal:1,_id:0
})
//? using alias
// --> salary:"$sal"
//"$sal"--->values of the sal field
db.emp.find({},{
    ename:1,salary:"$sal",_id:0
})


//?empno-->employeeNumber,comm-->commission,ename


// ============================================================
//          5. AGGREGATION - $project & $match
// ============================================================

//! Aggregation:---
// Aggregation is a framework for mongodb to transform,filter,group,order,
// calculate,compute data and return computed data.


//! What is Aggregation Pipeline:---
/*
Aggregation Works based on Pipeline:---
-->Data will executes on multiple stages
--> Stages will have specific operation/function
--> That stages also will have one flow(order)
*/

//! SQL--> VS<----MONGODB AGGREGATION MAPPING CHART
/*
  SQL ----------- MONGODB AGRREGATIONS
SELECT----------->$project
WHERE------------>$match
GROUP BY--------->$group
HAVING----------->$filter
ORDER BY--------->$sort
LIMIT------------>$limit
OFFSET----------->$skip
joins------------>$lookup
UNNEST----------->$unwind
AGGREGATIONS----->$sum,$avg,$max,$min,$count
*/

//?  Aggregation Pipeline(simple view)
/*
$project-->$match-->$group-->$filter-->$sort-.....-->final result
*/



//! AGGREGATIONS--->
// syntax:---
/*
db.cn.aggregate(
    [
        {
            stage1-->$project:{...}
        },
        {
            stage2
        },
        {stage3}....{stage n}
    ]
)
*/
// db.cn.find({},{projection(1,0)})
//? 1.$project:---
//-->it is used to select,rename,create new fields(using alias)
//SQl-->select ename,sal,sal+500 bonus from emp;

//Agrregation way:---
db.emp.aggregate(
    [
        {
            $project: {
                ename: 1, sal: 1, _id: 0,
                bonus: { $add: ["$sal", 500] }
            }
        }
    ]
)

//Task-->Display ename,sal,annual salary,deptno of emp collection
//All projection assignments using $project

// db.cn.find({filter})

//? 2.$match--
//It is used to filter the documents

//Display all ename,sal who are working deptno 10
db.emp.aggregate(
    [

        {
            $match: {
                deptno: 10
            }
        },
        {
            $project: {
                ename: 1, sal: 1, _id: 0, deptno: 1
            }
        }
    ]
)


//Task-->Display ename,sal,deptno who are earning less than 4000
// and working deptno 20

//Task-->Display ename,deptno who are not working 10,20
// with sal earning more than 700

//All filter assignments using $match


// ============================================================
//                 6. AGGREGATION - $group
// ============================================================

//!AGGREGATION


//? 3.$group--->It is used to group the documents

//? aggregate functions-->$max,$min,$sum,$avg,,,count---
db.cn.aggregate(
    [
        {
            $group:{
                _id:null/fieldName,
                newField:{....}
            }
        }
    ]
)
// two ways of using $group

//! First way of using $group using null
//? _id:null:----null is used to consider whole fields of entire document

// total salaries:---$add:{"$sal",300}

// DISPLAY TOTAL SALARY of all employees
db.emp.aggregate(
    [
        {
            $group:{
                _id:null,
                totSalary:{$sum:"$sal"}
            }
        },
        {
            $project:{
                totSalary:1,_id:0
            }
        }
    ]
)

//! Second way to use $ group using  _id:fieldNames


// DISPLAY TOTAL SALARY in each department
db.emp.aggregate(
    [
        {
            $group:{
                _id:"$deptno",
                totSalary:{$sum:"$sal"}
            }
        },
        {
            $project:{
                totSalary:1,_id:0
            }
        }
    ]
)


//TASKS--->$max,$min,$avg in each dept ,also for entire collection


//!----------Counting
//?   Count the documents of entire collection
db.emp.aggregate(
    [
        {
            $group:{
                _id:null,
                count_emp:{$sum:1}
            }
        },
        {
            $project:{
                count_emp:1,_id:0
            }
        }
    ]
)

//Task--Count the documents of each dept



//! $push in $group
// ? -->$push adds value in the array



// DISPLAY TOTAL SALARY,deptno in each department
db.emp.aggregate(
    [
        {
            $group:{
                _id:"$deptno",
                totSalary:{$sum:"$sal"},
                deptnumber:{$push:"$deptno"}
            }
        },
        {
            $project:{
                totSalary:1,_id:0,deptnumber:1
            }
        }
    ]
)

//Task 1---> display ename,deptno,maximum salary of emp collecion


//!$addToSet----> Add unique field value to $group

//Display unique jobs in each department
//before unique jobs--using $push
db.emp.aggregate(
    [
        {
            $group:{
                _id:"$deptno",
                Jobs:{$push:"$job"}
            }
        },
        {
            $project:{
                Jobs:1
            }
        }
    ]
)
//after  unique jobs--using $addToSet

db.emp.aggregate(
    [
        {
            $group:{
                _id:"$deptno",
                unqJobs:{$addToSet:"$job"}
            }
        },
        {
            $project:{
                unqJobs:1
            }
        }
    ]
)


//Task--->Display unique salries  in each department


//!using $match before group
//Task 2--->Display ename,salaries ineach dept  if the salary is less than 3000


db.emp.aggregate(
    [
        {
            $match:{
                sal:{$lt:3000}
            }
        },
        {
            $group:{
                _id:"$deptno",
                ename:{$push:"$ename"},
                salries:{$push:"$sal"}
            }
        },
        {
            $project:{
                ename:1,salries:1
            }
        }
    ]
)

//! using $match after the $group 
//Task--->Display ename,job if their dept contains more than 3 employees..?

db.emp.aggregate([
    {
        $group:{
            _id:"$deptno",
            empCount:{$sum:1},
            empDetails:{
                $push:{
                    ename:"$ename",job:"$job"
                }
            }
        }
    },
    {
        $match:{
            empCount:{$gt:3}
        }
    },
    {
        $project:{
            empDetails:1
        }
    }
])

// display only ename 
db.emp.aggregate([
    {
        $group:{
            _id:"$deptno",
            empCount:{$sum:1},
            empDetails:{
                $push:{
                    ename:"$ename",job:"$job"
                }
            }
        }
    },
    {
        $match:{
            empCount:{$gt:3}
        }
    },
    {
        $project:{
            ename:"$empDetails.ename"
        }
    }
])