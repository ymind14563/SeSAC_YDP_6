-- DCL (Data Control Language)
-- 데이터 베이스에 접근해 읽거나 쓰는 것을 제한할 수 있는 권한 부여 혹은 박탈

-- grant
-- 데이터베이스 사용자에게 특정 작업에 대한 수행 권한 부여
-- grant permission_type on db_name.table_name
-- 		to username@host IDENTIFIED by 'pw' [with grant option];

-- revoke
-- 특정 데이터베이스 사용자에게 특정 작업에 대한 권한 박탈
-- revoke permission_type on db_name.table_name 
-- 		from 'username'@'host';