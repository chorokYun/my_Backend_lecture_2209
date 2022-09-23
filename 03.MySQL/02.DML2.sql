/* 데이터 조작언어 */
/* 2. 수정(UPDATE)
UPDATE 테이블명
	SET 필드명=값[, 필드명=값, 필드명=값, ...]
	WHERE 조건;
*/
# Kwangju를 Gwangju로 수정
UPDATE city
	SET NAME='Gwangju', district='Gwangju'
	WHERE id=2336;
# 전라남도 도시의 인구를 20만으로 변경
UPDATE city
	SET population=200000
	WHERE district='Chollanam';
# 전라남도 도시의 인구를 5만명 증가시킴
UPDATE city, (SELECT * FROM city WHERE district='Chollanam') b
	SET city.Population=b.Population+50000
	WHERE city.id=b.id;

/* 3. 생성(INSERT) 
INSERT INTO city
	(필드명)
	VALUES (필드값);
*/
INSERT INTO city
	(NAME, countrycode, district, population)
	VALUES ('Haenam', 'KOR', 'Chollanam', 100000);
INSERT INTO city
	VALUES (DEFAULT, 'Jangsung', 'KOR', 'Chollanam', 100000);
# 기존 테이블의 데이터로 데이터를 추가하는 방법
create table citycopy like city;
show tables;
select * from citycopy;
insert into citycopy select * from city;
select * from citycopy;

/* 4. 삭제(DELETE) 
DELETE FROM 테이블명
	WHERE 조건
*/
DELETE FROM citycopy
	WHERE countrycode='AFG';
DELETE FROM citycopy
	WHERE population>9000000;