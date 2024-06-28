-- 관계를 정의 했기에 데이터 삽입 순서가 중요하다.
-- Team이 없는데 Player를 추가할 수 없기 때문이다.

insert into Team(name, createdAt, updatedAt) values 
  ('sk', now(), now()), 
  ('kt', now(), now()), 
  ('nc', now(), now()), 
  ('lg', now(), now());

insert into Player(name, age, createdAt, updatedAt, team_id) values 
  ('홍길동', 20, now(), now(), 1), 
  ('성춘향', 21, now(), now(), 3), 
  ('김첨지', 22, now(), now(), 2), 
  ('김수지', 23, now(), now(), 4), 
  ('강민재', 19, now(), now(), 1), 
  ('황찬수', 28, now(), now(), 1), 
  ('이장우', 24, now(), now(), 2), 
  ('박나래', 30, now(), now(), 3);

insert into Profile(position, salary, createdAt, updatedAt, player_id) values
  ('1B', 100, now(), now(), 1),
  ('2B', 150, now(), now(), 2),
  ('3B', 80, now(), now(), 3),
  ('LF', 200, now(), now(), 4),
  ('1B', 170, now(), now(), 5),
  ('2B', 130, now(), now(), 6),
  ('3B', 90, now(), now(), 7),
  ('LF', 250, now(), now(), 8);

select * from Player;
select * from Profile;
select * from Team;