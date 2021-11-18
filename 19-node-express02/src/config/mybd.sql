use crud_node1;

create table personas(
	id INT NOT NULL auto_increment,
    nombre varchar(50) NOT NULL,
    direccion varchar(100),
    telefono varchar(10),
    primary key(id)
)