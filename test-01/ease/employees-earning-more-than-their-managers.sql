# Write your MySQL query statement below
SELECT em2.name as Employee FROM employee em1
INNER JOIN employee em2 ON em1.id = em2.managerId
WHERE em1.salary < em2.salary
