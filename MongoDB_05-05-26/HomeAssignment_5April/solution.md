---
## Part 1 — Projection Assignment
---

### Q1. Display all details from the Employee table

```js
db.emp.find();
```

---

### Q2. Display Name (ename) and Manager (mgr) of all employees

```js
db.emp.find({}, { ename: 1, mgr: 1, _id: 0 });
```

---

### Q3. Display Name and Salary of all employees

```js
db.emp.find({}, { ename: 1, sal: 1, _id: 0 });
```

---

### Q4. Display Name and Commission of all employees

```js
db.emp.find({}, { ename: 1, comm: 1, _id: 0 });
```

---

### Q5. Display Employee ID (empno) and Department Number (deptno) of all employees

```js
db.emp.find({}, { empno: 1, deptno: 1, _id: 0 });
```

---

### Q6. Display Name (ename) and Hire Date (hiredate) of all employees

```js
db.emp.find({}, { ename: 1, hiredate: 1, _id: 0 });
```

---

### Q7. Display Name and Designation (job) of all employees

```js
db.emp.find({}, { ename: 1, job: 1, _id: 0 });
```

---

### Q8. Display Name, Job and Salary of all employees

```js
db.emp.find({}, { ename: 1, job: 1, sal: 1, _id: 0 });
```

---

### Q9. Display all Department Names (dname) from the Department table

```js
db.dept.find({}, { dname: 1, _id: 0 });
```

---

### Q10. Display Department Name and Location (loc) from the Department table

```js
db.dept.find({}, { dname: 1, loc: 1, _id: 0 });
```

---

## Part 2 — Single Filter Condition Assignment

---

### Q1. Display the Salary of the employee whose name is SMITH

```js
db.emp.find({ ename: "smith" }, { sal: 1, _id: 0 });
```

---

### Q2. Display Names of employees working as CLERK

```js
db.emp.find({ job: "clerk" }, { ename: 1, _id: 0 });
```

---

### Q3. Display Salary of employees working as SALESMAN

```js
db.emp.find({ job: "salesman" }, { ename: 1, sal: 1, _id: 0 });
```

---

### Q4. Display details of the employee who earns 2000

```js
db.emp.find({ sal: 2000 });
```

---

### Q5. Display details of the employee whose name is JONES

```js
db.emp.find({ ename: "jones" });
```

---

### Q6. Display details of employees working as ANALYST

```js
db.emp.find({ job: "analyst" });
```

---

### Q7. Display Name, Salary and Annual Salary if the Salary is 1250

```js
db.emp.aggregate([
  {
    $match: { sal: 1250 },
  },
  {
    $project: {
      ename: 1,
      sal: 1,
      annualSalary: { $multiply: ["$sal", 12] },
      _id: 0,
    },
  },
]);
```

---

### Q8. Display Employee Number (empno) of employees working in Department 30

```js
db.emp.find({ deptno: 30 }, { empno: 1, _id: 0 });
```

---

### Q9. Display details of employees working as MANAGER

```js
db.emp.find({ job: "manager" });
```

---

### Q10. Display Name and Salary of the employee who earns a Commission of 1400

```js
db.emp.find({ comm: 1400 }, { ename: 1, sal: 1, _id: 0 });
```
