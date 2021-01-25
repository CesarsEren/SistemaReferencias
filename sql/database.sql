create database node_mysql_ts;

create table posts(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) not null,
    description text not null,
    image_url text ,
    created_at timestamp default current_time
);