export interface Usuarios {
  id_usuario?: number;
  id_tipo_usuario?: number;
  correo?: String;
  password?: String;
  id_empresa?: number;
  id_cargo?: number;
  id_tipo_documento?: number;
  documento?: String;
  nombre_persona?: String;
  apellido_paterno?: String;
  apellido_materno?: String;
  fecha_nacimiento?: Date;
  id_actividad?: number;
  cv?: String;
  fecha_registro?: Date;
  linkedin?: String;
  activo?: Boolean;
}
