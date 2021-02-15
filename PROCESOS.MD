# Procesos por desarrollar

Se desarrollará un sistema para generar referencias

## LANDING PAGE
    
    1.- Se desarrollará una Landing OnePage con temática que Scrollpy por secciones.

## MODO REFERIDOS

    1.- Crear Usuarios
    2.- Refererir Candidatos
    3.- Buscar Candidatos
    4.- Compartir Candidatos

### [(1)] Crear Usuarios

Flujo básico

    1.- Ingresar a la Web
    2.- Registrar tipo de usuario (ELEGIR TIPO DE USUARIO) [Candidato,Freelancer,Oficio]
    3.- Registrar Datos Personales y profesional.
        * ¿Cuáles son esos campos?
        * ¿Son diferentes en base al tipo de Usuario [Candidato,Freelancer,Oficio]?
    4.- Subir CV
        * ¿Es un archivo?,
        * ¿De qué extensión?,
        * ¿Cuántos mgbts como máximo?
    5.- Registrar Página de LinkedIn
    5.- Registrar Links de Trabajo anteriores
        * ¿Existe un límite de links de trabajo?
    6.- Solicitar Referencia a un Tercero
        * ¿A través de correo electrónico?,
        * ¿Qué pasa si el que referencia no tiene cuenta en la plataforma?,
        * ¿La cuenta queda en stand by mientras el reclutador no le de referencia al usuario?

    7.- Acepta Términos Legales
        * ¿Son diferentes en base a cada perfil o solo diferente entre Reclutator y cualquier perfil de candidato?

1er Flujo Alternativo(Paso 2) [Empresa]

    4.- Registrar datos de la empresa.!FALLA_LÓGICA
        * ¿Cualquiera persona puede realizar el registro de la empresa?,
        * ¿Cómo validamos que la información de la empresa sea real o el RUC Ingresado sea válido?
    5.- Registrar datos del reclutador.
    6.- Confirmar que el reclutador labora en la empresa con Linkedin ,

> !INFO Linkedin cuenta con 3 apis , [Iniciar Sessión,Compartir en Linkedin,Agregar al perfil], el response JSON de Iniciar Sessión no te entrega si labora o no en tal empresa, así como tampoco la información de la empresa.

2do Flujo Alternativo (Paso 4) [[Oficio]]

    5.- Contestar Preguntas propuestas
    6.- SI Registrar Link de trabajos anteriores
        *¿Además de el link se debe poner el ruc de la empresa que lo contrato o algún otro dato?
        *¿Qué pasa si no tiene un link?,
        dado a que en este caso es un Trabajo de Oficio, que entiendo algo como gasfitería o electricista.
    6 o 7.- Solicitar referencia a un tercero.
        * ¿Ese tercero siempre será un reclutador?

### [(2)] Referir Candidatos

Flujo Básico

    1.- Candidato Registra el proceso (VIENE DEL PROCESO DE [Crear Usuarios-flujo básico]).
    2.- Registra Información (Proceso anterior).
    3.- Envío de correo a reclutado (Proceso anterior).

    4.- Reclutador valida información.
        * ¿Qué información además del correo enviado por la plataforma con el nombre del candidato necesita el reclutador?
    5.- Confirmación de datos.
    6.- Registra Información.
        * ¿Qué información registra?,
        * ¿Qué campos abarca la referencia?
    7.- Envio de confirmación de cuenta al candidato.
    8.- Candidato visible para las empresas.
        * ¿Cada Usuario contará con un perfil y este será visible para las empresas?

### [(3)] Buscar Candidatos

Flujo Básico

    1.- Ingresar a la web con usuario y clave
    2.- Definir Puesto
        * ¿No es lo mismo que el paso de abajo?
    3.- Definir busqueda de tipo de candidato
        * ¿Esto significa registrar un proyecto con el que se relacione la busqueda?
    4.- Busqueda de candidatos formales,freelancers
    5.- Busca por [Posición,Por Área,Nro de referencias,Antiguedad de registro]
    6.- Selección de Candidatos
        * ¿Se registra una lista de candidatos seleccionados y se relaciona con el proyecto?
    5.- Evaluación de Candidatos
    6.- Marcar como favorito | candidato contactado
        *¿Al marcarlo como favorito o contactado se registra para que fue contactado o por qué es favorito?

1do Flujo Alternativo [Favoritos](Paso 5)
4.- Busqueda de candidatos favoritos
5.- Evaluación de Candidatos
6.- Marcar como favorito | candidato contactado

2do Flujo Alternativo [Oficios](Paso 5)

    4.- Busqueda de candidatos de Oficio
    5.- Busca por [Nro Referencias,Por Área,Antiguedad de registro]
        *¿La busqueda por Antiguedad es necesaria o es un filtro de ordenamiento?
    6.- Selección de Candidatos
    7.- Evaluación de Candidatos
    8.- Marcar como favorito | candidato contactado

### [(4)] Compartir Candidatos

    1.- Buscar candidatos [Viene del proceso anterior (BUSCAR CANDIDATOS)]
    2.- ¿Candidatos optimo para un tercero?
        * ¿La web valida esto?
            * ¿Cuáles son los puntos a validar para poder ser referenciado a un tercero?
    3.- Compartir la información vía correo y whatsapp (POR SEPARADO)
        * ¿Ese correo o whatsapp está relacionado a la cuenta de otro reclutador?
        * ¿Cuál es el formato o los datos a poner en ese texto por compartir?

> Formatos de correo | marketing y diseño

    1.- Confirmación de Referencia y Activación de cuenta para Candidato
    2.- Correo de Solicitud de Referencia para Reclutador
    3.- Correo de confirmación de correo. (Opcional, en caso se desee confirmar el correo del usuario)
    4.- Formato para compartir Usuario por correo .
        Formato para compartir Usuario por Whatsapp.
