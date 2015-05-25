--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

SET search_path = public, pg_catalog;

ALTER TABLE ONLY public.course_registrations DROP CONSTRAINT fk_rails_fc7a68a92b;
ALTER TABLE ONLY public.course_registrations DROP CONSTRAINT fk_rails_e647973df6;
DROP INDEX public.unique_schema_migrations;
DROP INDEX public.index_users_on_username;
DROP INDEX public.index_course_registrations_on_user_id;
DROP INDEX public.index_course_registrations_on_course_id;
ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
ALTER TABLE ONLY public.user_progresses DROP CONSTRAINT user_progresses_pkey;
ALTER TABLE ONLY public.templates DROP CONSTRAINT templates_pkey;
ALTER TABLE ONLY public.grades_schemes DROP CONSTRAINT grades_schemes_pkey;
ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_pkey;
ALTER TABLE ONLY public.course_registrations DROP CONSTRAINT course_registrations_pkey;
ALTER TABLE ONLY public.course_data DROP CONSTRAINT course_data_pkey;
ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.user_progresses ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.templates ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.grades_schemes ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.courses ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.course_registrations ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.course_data ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE public.users_id_seq;
DROP TABLE public.users;
DROP SEQUENCE public.user_progresses_id_seq;
DROP TABLE public.user_progresses;
DROP SEQUENCE public.templates_id_seq;
DROP TABLE public.templates;
DROP TABLE public.schema_migrations;
DROP SEQUENCE public.grades_schemes_id_seq;
DROP TABLE public.grades_schemes;
DROP SEQUENCE public.courses_id_seq;
DROP TABLE public.courses;
DROP SEQUENCE public.course_registrations_id_seq;
DROP TABLE public.course_registrations;
DROP SEQUENCE public.course_data_id_seq;
DROP TABLE public.course_data;
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: course_data; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE course_data (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    template_id integer NOT NULL,
    data text,
    pr_type integer DEFAULT 0,
    course_id integer NOT NULL,
    enabled boolean DEFAULT true,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    url_name character varying(255) NOT NULL,
    "order" integer
);


ALTER TABLE public.course_data OWNER TO postgres;

--
-- Name: course_data_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE course_data_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.course_data_id_seq OWNER TO postgres;

--
-- Name: course_data_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE course_data_id_seq OWNED BY course_data.id;


--
-- Name: course_registrations; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE course_registrations (
    id integer NOT NULL,
    user_id integer,
    course_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    user_role smallint
);


ALTER TABLE public.course_registrations OWNER TO postgres;

--
-- Name: course_registrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE course_registrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.course_registrations_id_seq OWNER TO postgres;

--
-- Name: course_registrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE course_registrations_id_seq OWNED BY course_registrations.id;


--
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE courses (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    pr_type integer DEFAULT 0 NOT NULL,
    url character varying(255),
    metadata text,
    parent_id integer DEFAULT 0,
    template_id integer DEFAULT 0,
    enabled boolean DEFAULT true,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE courses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.courses_id_seq OWNER TO postgres;

--
-- Name: courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE courses_id_seq OWNED BY courses.id;


--
-- Name: grades_schemes; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE grades_schemes (
    id integer NOT NULL,
    name character varying NOT NULL,
    stage integer NOT NULL,
    scheme text NOT NULL,
    enabled boolean DEFAULT true,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.grades_schemes OWNER TO postgres;

--
-- Name: grades_schemes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE grades_schemes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.grades_schemes_id_seq OWNER TO postgres;

--
-- Name: grades_schemes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE grades_schemes_id_seq OWNED BY grades_schemes.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE schema_migrations (
    version character varying(255) NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO postgres;

--
-- Name: templates; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE templates (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    tag character varying(255) NOT NULL,
    description text,
    pr_type integer DEFAULT 0 NOT NULL,
    enabled boolean DEFAULT true,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.templates OWNER TO postgres;

--
-- Name: templates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE templates_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.templates_id_seq OWNER TO postgres;

--
-- Name: templates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE templates_id_seq OWNED BY templates.id;


--
-- Name: user_progresses; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE user_progresses (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    grade real,
    user_id character varying(255) NOT NULL,
    current_grade integer NOT NULL,
    metadata text,
    pr_type integer DEFAULT 0,
    parent_id integer DEFAULT 0,
    enabled boolean,
    current boolean,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.user_progresses OWNER TO postgres;

--
-- Name: user_progresses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE user_progresses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_progresses_id_seq OWNER TO postgres;

--
-- Name: user_progresses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE user_progresses_id_seq OWNED BY user_progresses.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE users (
    id integer NOT NULL,
    username character varying NOT NULL,
    first_name character varying NOT NULL,
    middle_name character varying,
    surnames character varying NOT NULL,
    personal_id bigint NOT NULL,
    gender character varying(1) NOT NULL,
    email character varying NOT NULL,
    telephone character varying(20),
    mobile_phone character varying(20),
    role smallint DEFAULT 3,
    enabled boolean DEFAULT true,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    metadata json,
    password_digest character varying,
    image character varying(50),
    token character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY course_data ALTER COLUMN id SET DEFAULT nextval('course_data_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY course_registrations ALTER COLUMN id SET DEFAULT nextval('course_registrations_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY courses ALTER COLUMN id SET DEFAULT nextval('courses_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY grades_schemes ALTER COLUMN id SET DEFAULT nextval('grades_schemes_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY templates ALTER COLUMN id SET DEFAULT nextval('templates_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_progresses ALTER COLUMN id SET DEFAULT nextval('user_progresses_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: course_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO course_data VALUES (1, 'Introducción', 2, '{"intro": "La <b>probabilidad</b> mide las posibilidades de cada uno de los resultados de un suceso o evento.<br /><br />La <b>estadística</b> es una herramienta que se utiliza para organizar información y encontrar conclusiones.<br /><br />En esta lección conocerás:<br /><br />- Cómo identificar eventos probables, cómo organizar e interpretar  información en tablas y gráficas, qué representa la media y cómo se calcula.", "standard":"\<ul\>\<li\>Conjeturo y pongo a prueba predicciones acerca de la posibilidad de ocurrencia de eventos.\</li\>\<li\>Represento datos usando tablas y gráficas (pictogramas, gráficas de barras, diagramas de líneas, diagramas circulares).\</li\>\<li\>Interpreto información presentada en tablas y gráficas (pictogramas, gráficas de barras, diagramas de líneas, diagramas circulares).\</li\>\</ul\>", "element":"\<ul\>\<li\>Evaluar la posibilidad de ocurrencia de eventos.\</li\>\<li\>Representar datos usando tablas y gráficas.\</li\>\<li\>Interpretar los datos presentados en tablas y gráficas.\</li\>\</ul\>"}', 0, 5, true, '2014-09-30 17:21:39.536721', '2014-10-27 14:58:20.779577', 'intro', 1);
INSERT INTO course_data VALUES (31, 'Introducción', 2, '{"intro":"El estudio de la geometría nos permite conocer y medir los objetos que nos rodean.<br /><br />En esta guía conocerás:<br /><br />Qué son las rectas, cómo se miden los ángulos y cuáles son los elementos de un polígono.","standard":"<ul><li>Comparo y clasifico figuras bidimensionales de acuerdo con sus componentes (ángulos, vértices) y características.</li><li>Identifico, represento y utilizo ángulos en giros, aberturas, inclinaciones, figuras, puntas y esquinas en situaciones estáticas y dinámicas.</li></ul>","element":"<ul><li>Clasificar las figuras bidimensionales de acuerdo a sus características.</li><li>Identificar y representar ángulos de acuerdo a su medida.</li></ul>"}', 0, 9, true, '2015-05-25 11:03:28.458382', '2015-05-25 11:03:28.458382', 'intro', 1);
INSERT INTO course_data VALUES (32, 'Tema 1', 13, '{"lessonTitle":"Rectas","instruction":{"mainClasses":"col-md-8 col-sm-11 center-block","hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 100px;","iconInstruction":"pr-icon pr-icon-circle-arrow half","instruction":"Haz clic sobre cada una de las definiciones y observa su representación gráfica."}}', 1, 9, true, '2015-05-25 16:53:45.893498', '2015-05-25 16:53:45.893498', 'tema-1-1', 2);
INSERT INTO course_data VALUES (2, 'Tema 1', 4, '{"lessonTitle":"Sucesos seguros, posibles e imposibles","footerBackground":"#6d5143","footerHeight":"212px","audio":{"start":32,"end":49.44462585034013},"images":[{"src":"circo1.png","styles":"bottom: 0; left: 0;"},{"src":"circo2.png","styles":"bottom: 124px; right: 0;"},{"src":"andres_lat_izq.png","styles":"bottom: 74px; right: 48px;"}],"instruction":{"hasContent":false,"hasInstruction":true,"styles":"float: none; margin: 0 auto; height: 112px; width: 552px;","instructionStyles":"width: 552px; height: 112px; font-size: 12px;","instructionBg":"blue-green-background","iconInstruction":"pr-icon pr-icon-circle-arrow half","instruction":"Andrés tomará un globo de cada grupo sin mirar su color. ¿Será azul?<br>Haz clic sobre cada grupo de globos para conocer el tipo de suceso."},"itemsImagesClass":"col-md-4","itemsImage":[{"image":"globos_azul.png","stylesImage":"float: right;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso seguro</span> porque ocurre siempre."},{"image":"globos_azul_amarillo.png","styles":"text-align: center;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso posible</span> porque puede ocurrir o no."},{"image":"globos_amarillo.png","stylesImage":"float: left;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso imposible</span> porque nunca ocurre."}]}', 1, 5, true, '2014-10-29 16:31:00.793295', '2014-12-10 16:07:29.637883', 'tema-1-1', 2);
INSERT INTO course_data VALUES (3, 'Tema 1', 4, '{"lessonTitle":"Más probable, menos probable","footerBackground":"#6d5143","footerHeight":"250px","audio":{"start":76,"end":98.42274376417234},"images":[{"src":"canasta_bolas.png","styles":"bottom: 80px; left: 30px;"}],"instruction":{"hasContent":true,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 405px; float: right; margin-right: 200px;","contentStyles":"100%","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px;","instructionStyles":"width: 100%; height: 100px;","contentMainStyles":"height: 62px; font-size:12px;","title":"Más probable, menos probable","iconInstruction":"pr-icon pr-icon-circle-arrow half","text":"En la canasta hay tres pelotas verdes y seis pelotas naranjas y Luis va a sacar una sin mirar. ¿De qué color es la pelota? <b>Analicemos</b>","instruction":"Haz clic sobre cada una de las pelotas, ubicadas en la parte inferior, para conocer el tipo de probabilidad.","contentIcon":"pr-icon-notebook"},"stylesImagesInfo":"bottom: 48px;","itemsImagesClass":"col-md-12","itemsImage":[{"image":"pelota_verde.png","styles":"height: 120px;","stylesImage":"position: absolute; right: 500px;","stylesPopover":"left: 220px; width: 468px; height: 47px; bottom: 26px; padding: 4px; padding-left: 82px;","stylesPopoverTitle":"position: absolute; left: 0; width: 80px; height: 100%; top: 0; padding: 13px; font-size: 16px; font-weight: 100; color: #FFF; background-color: #3AA835;","contentTitle":"Verde","content":"En la canasta hay menos pelotas verdes que naranjas, por lo tanto es <b>menos probable</b> sacar una pelota verde que una pelota naranja."},{"image":"pelota_naranja.png","styles":"height: 120px;","stylesImage":"position: absolute; right: 525px;","stylesPopover":"left: 244px; width: 468px; height: 47px; bottom: 51px; padding: 4px; padding-left: 82px;","stylesPopoverTitle":"position: absolute; left: 0; width: 80px; height: 100%; top: 0; padding: 13px; font-size: 16px; font-weight: 100; color: #FFF; background-color: #ED7D32;","contentTitle":"Naranja","content":"En la canasta hay más pelotas naranjas que verdes, por lo tanto es <b>más probable</b> sacar una pelota naranja que una pelota verde."}]}', 1, 5, true, '2014-11-07 09:57:27.884471', '2014-12-10 16:32:07.741024', 'tema-1-2', 3);
INSERT INTO course_data VALUES (25, 'Actividad 2. Conceptualización', 17, '{"stylesInstructionRow":"float: none; margin: auto;","instruction":{"class":"col-md-6","hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 100px;","iconInstruction":"pr-icon pr-icon-circle-mouse half","instruction":"Haz clic sobre cada figura de color y seguidamente haz clic en su sombra congruente para que se unan con una línea."},"activityContainerStyles":"margin-top: 5px;","activityName":"activity2_conceptualization","activity":{"width":1000,"height":400,"atlasMap":"actividad2_conceptualizacion_sheet.png","assetPositions":[{"x":9,"y":14,"name":"static_container","contentImage":{"x":18,"y":22,"name":"shape1"}},{"x":131,"y":14,"name":"static_container","contentImage":{"x":21,"y":22,"name":"shape2"}},{"x":254,"y":14,"name":"static_container","contentImage":{"x":16,"y":15,"name":"shape3"}},{"x":377,"y":14,"name":"static_container","contentImage":{"x":12,"y":28,"name":"shape4"}},{"x":500,"y":14,"name":"static_container","contentImage":{"x":22,"y":25,"name":"shape5"}},{"x":623,"y":14,"name":"static_container","contentImage":{"x":26,"y":12,"name":"shape6"}},{"x":746,"y":14,"name":"static_container","contentImage":{"x":8,"y":16,"name":"shape7"}},{"x":869,"y":14,"name":"static_container","contentImage":{"x":10,"y":12,"name":"shape8"}},{"x":8,"y":263,"name":"disabled_container","contentImage":{"x":12,"y":7,"name":"grey_shape1"},"extraContent":[{"x":8,"y":357,"name":"icon_container"}],"icons":{"x":13,"y":360}},{"x":131,"y":263,"name":"disabled_container","contentImage":{"x":8,"y":5,"name":"grey_shape2"},"extraContent":[{"x":131,"y":357,"name":"icon_container"}],"icons":{"x":136,"y":360}},{"x":254,"y":263,"name":"disabled_container","contentImage":{"x":11,"y":4,"name":"grey_shape3"},"extraContent":[{"x":254,"y":357,"name":"icon_container"}],"icons":{"x":259,"y":360}},{"x":377,"y":263,"name":"disabled_container","contentImage":{"x":17,"y":3,"name":"grey_shape4"},"extraContent":[{"x":377,"y":357,"name":"icon_container"}],"icons":{"x":382,"y":360}},{"x":500,"y":263,"name":"disabled_container","contentImage":{"x":27,"y":4,"name":"grey_shape5"},"extraContent":[{"x":500,"y":357,"name":"icon_container"}],"icons":{"x":505,"y":360}},{"x":623,"y":263,"name":"disabled_container","contentImage":{"x":23,"y":11,"name":"grey_shape6"},"extraContent":[{"x":623,"y":357,"name":"icon_container"}],"icons":{"x":628,"y":360}},{"x":746,"y":263,"name":"disabled_container","contentImage":{"x":20,"y":5,"name":"grey_shape7"},"extraContent":[{"x":746,"y":357,"name":"icon_container"}],"icons":{"x":751,"y":360}},{"x":869,"y":263,"name":"disabled_container","contentImage":{"x":19,"y":5,"name":"grey_shape8"},"extraContent":[{"x":869,"y":357,"name":"icon_container"}],"icons":{"x":874,"y":360}}],"activeBlocks":[{"x":8,"y":265,"name":"active_container","contentImage":{"x":12,"y":7,"name":"grey_shape1"}},{"x":131,"y":265,"name":"active_container","contentImage":{"x":8,"y":5,"name":"grey_shape2"}},{"x":254,"y":265,"name":"active_container","contentImage":{"x":11,"y":4,"name":"grey_shape3"}},{"x":377,"y":265,"name":"active_container","contentImage":{"x":17,"y":3,"name":"grey_shape4"}},{"x":500,"y":265,"name":"active_container","contentImage":{"x":27,"y":4,"name":"grey_shape5"}},{"x":623,"y":265,"name":"active_container","contentImage":{"x":23,"y":11,"name":"grey_shape6"}},{"x":746,"y":265,"name":"active_container","contentImage":{"x":20,"y":5,"name":"grey_shape7"}},{"x":869,"y":265,"name":"active_container","contentImage":{"x":19,"y":5,"name":"grey_shape8"}}],"helperHandlers":[{"x":69,"y":154,"name":"grey_circle"},{"x":191,"y":154,"name":"grey_circle"},{"x":315,"y":154,"name":"grey_circle"},{"x":439,"y":154,"name":"grey_circle"},{"x":561,"y":154,"name":"grey_circle"},{"x":685,"y":154,"name":"grey_circle"},{"x":806,"y":154,"name":"grey_circle"},{"x":930,"y":154,"name":"grey_circle"}],"answerObjects":[{"x":69,"y":248,"name":"grey_circle","value":"a"},{"x":191,"y":248,"name":"grey_circle","value":"b"},{"x":315,"y":248,"name":"grey_circle","value":"c"},{"x":439,"y":248,"name":"grey_circle","value":"d"},{"x":561,"y":248,"name":"grey_circle","value":"e"},{"x":685,"y":248,"name":"grey_circle","value":"f"},{"x":806,"y":248,"name":"grey_circle","value":"g"},{"x":930,"y":248,"name":"grey_circle","value":"h"}],"eventHandlers":[{"x":69,"y":154,"name":"grey_circle","activeName":"red_circle","value":"d","answer":{"x":439,"y":248}},{"x":191,"y":154,"name":"grey_circle","activeName":"red_circle","value":"g","answer":{"x":806,"y":248}},{"x":315,"y":154,"name":"grey_circle","activeName":"red_circle","value":"h","answer":{"x":930,"y":248}},{"x":439,"y":154,"name":"grey_circle","activeName":"red_circle","value":"a","answer":{"x":69,"y":248}},{"x":561,"y":154,"name":"grey_circle","activeName":"red_circle","value":"f","answer":{"x":685,"y":248}},{"x":685,"y":154,"name":"grey_circle","activeName":"red_circle","value":"e","answer":{"x":561,"y":248}},{"x":806,"y":154,"name":"grey_circle","activeName":"red_circle","value":"b","answer":{"x":191,"y":248}},{"x":930,"y":154,"name":"grey_circle","activeName":"red_circle","value":"c","answer":{"x":315,"y":248}}],"linesColor":"#CF0D25","atlasJson":"{\"frames\":[{\"filename\":\"static_container\",\"frame\":{\"x\":0,\"y\":178,\"w\":121,\"h\":124},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":121,\"h\":124},\"sourceSize\":{\"w\":121,\"h\":124}},{\"filename\":\"active_container\",\"frame\":{\"x\":363,\"y\":0,\"w\":121,\"h\":122},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":121,\"h\":122},\"sourceSize\":{\"w\":121,\"h\":122}},{\"filename\":\"disabled_container\",\"frame\":{\"x\":363,\"y\":265,\"w\":121,\"h\":124},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":121,\"h\":124},\"sourceSize\":{\"w\":121,\"h\":124}},{\"filename\":\"grey_circle\",\"frame\":{\"x\":307,\"y\":351,\"w\":22,\"h\":22},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":22,\"h\":22},\"sourceSize\":{\"w\":22,\"h\":22}},{\"filename\":\"red_circle\",\"frame\":{\"x\":331,\"y\":374,\"w\":22,\"h\":22},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":22,\"h\":22},\"sourceSize\":{\"w\":22,\"h\":22}},{\"filename\":\"icon_container\",\"frame\":{\"x\":192,\"y\":263,\"w\":34,\"h\":30},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":34,\"h\":30},\"sourceSize\":{\"w\":34,\"h\":30}},{\"filename\":\"icon_arrow\",\"frame\":{\"x\":307,\"y\":374,\"w\":23,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":23,\"h\":23},\"sourceSize\":{\"w\":23,\"h\":23}},{\"filename\":\"icon_right\",\"frame\":{\"x\":307,\"y\":327,\"w\":23,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":23,\"h\":23},\"sourceSize\":{\"w\":23,\"h\":23}},{\"filename\":\"icon_wrong\",\"frame\":{\"x\":307,\"y\":303,\"w\":23,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":23,\"h\":23},\"sourceSize\":{\"w\":23,\"h\":23}},{\"filename\":\"shape1\",\"frame\":{\"x\":0,\"y\":95,\"w\":87,\"h\":82},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":87,\"h\":82},\"sourceSize\":{\"w\":87,\"h\":82}},{\"filename\":\"shape3\",\"frame\":{\"x\":273,\"y\":96,\"w\":89,\"h\":95},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":89,\"h\":95},\"sourceSize\":{\"w\":89,\"h\":95}},{\"filename\":\"shape2\",\"frame\":{\"x\":192,\"y\":0,\"w\":80,\"h\":80},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":80,\"h\":80},\"sourceSize\":{\"w\":80,\"h\":80}},{\"filename\":\"shape4\",\"frame\":{\"x\":363,\"y\":194,\"w\":97,\"h\":70},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":97,\"h\":70},\"sourceSize\":{\"w\":97,\"h\":70}},{\"filename\":\"shape5\",\"frame\":{\"x\":273,\"y\":192,\"w\":75,\"h\":75},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":75,\"h\":75},\"sourceSize\":{\"w\":75,\"h\":75}},{\"filename\":\"shape6\",\"frame\":{\"x\":192,\"y\":81,\"w\":68,\"h\":100},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":68,\"h\":100},\"sourceSize\":{\"w\":68,\"h\":100}},{\"filename\":\"shape7\",\"frame\":{\"x\":202,\"y\":303,\"w\":104,\"h\":94},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":104,\"h\":94},\"sourceSize\":{\"w\":104,\"h\":94}},{\"filename\":\"shape8\",\"frame\":{\"x\":101,\"y\":303,\"w\":100,\"h\":100},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":100,\"h\":100},\"sourceSize\":{\"w\":100,\"h\":100}},{\"filename\":\"grey_shape1\",\"frame\":{\"x\":363,\"y\":123,\"w\":97,\"h\":70},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":97,\"h\":70},\"sourceSize\":{\"w\":97,\"h\":70}},{\"filename\":\"grey_shape2\",\"frame\":{\"x\":0,\"y\":0,\"w\":104,\"h\":94},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":104,\"h\":94},\"sourceSize\":{\"w\":104,\"h\":94}},{\"filename\":\"grey_shape3\",\"frame\":{\"x\":0,\"y\":303,\"w\":100,\"h\":100},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":100,\"h\":100},\"sourceSize\":{\"w\":100,\"h\":100}},{\"filename\":\"grey_shape4\",\"frame\":{\"x\":105,\"y\":0,\"w\":86,\"h\":80},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":86,\"h\":80},\"sourceSize\":{\"w\":86,\"h\":80}},{\"filename\":\"grey_shape5\",\"frame\":{\"x\":122,\"y\":178,\"w\":68,\"h\":100},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":68,\"h\":100},\"sourceSize\":{\"w\":68,\"h\":100}},{\"filename\":\"grey_shape6\",\"frame\":{\"x\":105,\"y\":81,\"w\":75,\"h\":75},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":75,\"h\":75},\"sourceSize\":{\"w\":75,\"h\":75}},{\"filename\":\"grey_shape7\",\"frame\":{\"x\":192,\"y\":182,\"w\":80,\"h\":80},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":80,\"h\":80},\"sourceSize\":{\"w\":80,\"h\":80}},{\"filename\":\"grey_shape8\",\"frame\":{\"x\":273,\"y\":0,\"w\":89,\"h\":95},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":89,\"h\":95},\"sourceSize\":{\"w\":89,\"h\":95}}],\"meta\":{\"app\":\"http://www.leshylabs.com/apps/sstool/\",\"version\":\"Leshy SpriteSheet Tool v0.8.1\",\"size\":{\"w\":484,\"h\":403},\"scale\":1}}"}}', 2, 6, true, '2015-03-04 17:02:05.22446', '2015-03-04 17:02:05.22446', 'actividad-1-2', 11);
INSERT INTO course_data VALUES (16, 'Tema 1', 12, '{"lessonTitle":"Cuadriláteros","footerBackground":"#607944","footerHeight":"244px","animationContainer":{"classes":"col-md-6"},"animationContent":{"hasContent":true,"styles":"width: 100%;","contentMainClass":"animation-content","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 24px; height: 47px;","stylesContentIcon":"height: 47px;","contentMainStyles":"font-size: 14px; width: 100%; padding-top: 12px;","title":"Cuadriláteros","text":"Son polígonos de cuatro lados, por lo tanto tienen cuatro vértices y a su vez cuatro ángulos.","contentIcon":"pr-icon-notebook","main":{"image":{"src":"tema1_cuadrilatero1.gif"},"bottomText":{"text":"Algunos ejemplos de cuadriláteros son:"}}},"itemsContainer":{"classes":"col-md-6"},"itemsClass":"col-md-5","items":[[{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 109px; padding-top: 0;","title":"Rectángulo","contentIcon":"pr-icon-picture","main":{"image":{"src":"tema1_rectangulo.png"}}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 109px; padding-top: 0;","title":"Cuadrado","contentIcon":"pr-icon-picture","main":{"image":{"src":"tema1_cuadrado.png"}}}],[{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 109px; padding-top: 0;","title":"Rombo","contentIcon":"pr-icon-picture","main":{"image":{"src":"tema1_rombo.png"}}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 109px; padding-top: 0;","title":"Romboide","contentIcon":"pr-icon-picture","main":{"image":{"src":"tema1_romboide.png"}}}],[{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 109px; padding-top: 0;","title":"Trapecio","contentIcon":"pr-icon-picture","main":{"image":{"src":"tema1_trapecio.png"}}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 109px; padding-top: 0;","title":"Trapezoide","contentIcon":"pr-icon-picture","main":{"image":{"src":"tema1_trapezoide.png"}}}]]}', 1, 6, true, '2015-02-03 11:29:02.010954', '2015-02-03 11:29:02.010954', 'tema-1-1', 2);
INSERT INTO course_data VALUES (5, 'Tema 2', 6, '{"lessonTitle":"Interpretando datos","footerBackground":"#4D869F","footerHeight":"214px","images":[{"src":"puesto_frutas.png","styles":"left: 0; bottom: 10px;"},{"src":"carlos_frente.png","styles":"right: 90px; bottom: 30px;"}],"pattern":"word","stylesInstructionRow":"height: 102px;","stylesInstructionContainer":"float: none; margin: auto; height: 100%; left: 100px;","instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","instructionStyles":"height: 102px; width: 100%;","iconInstruction":"pr-icon pr-icon-circle-pencil half","instruction":"De acuerdo a la tabla anterior, ayuda a Carlos a contestar las siguientes preguntas escribiendo en los espacios correspondientes."},"stylesActionRow":"height: 302px;","stylesActionCol":"width: 429px; float: none; margin: auto; height: 100%; left: 160px;","items":[{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuántas frutas se comieron el sábado?</b>","answer":"14"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuál fue la fruta que más comió su familia durante el fin de semana?</b>","answer":"Manzana"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuántas frutas se comieron en los dos días?</b>","answer":"28"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuál fruta comió menos su familia durante el fin de semana?</b>","answer":"Pera"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuántos bananos se comieron el día sábado?</b>","answer":"2"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Qué representa el número 7 en la tabla? <span class=\"text-right\">Total de:</span></b>","answer":"Mandarinas"}],"slideScreenOn":true,"stylesScreenContent":"display: table; height: 80%; width: 100%; margin: auto;","stylesScreenImage":"width: 373px; display: table-cell; vertical-align: middle; margin: auto; padding: 0; float: none;","slideScreenTitle":"Tabla informativa","slideScreenImage":"tabla_frutas.png","slideScreenAlt":"Tabla con informacón del tema 2-1"}', 1, 5, true, '2014-11-12 11:40:57.285378', '2014-11-19 17:34:27.376858', 'tema-2-2', 5);
INSERT INTO course_data VALUES (6, 'Tema 2', 7, '{"lessonTitle":"Gráfica de barras","footerBackground":"#4D869F","footerHeight":"213px","images":[{"src":"daniel_frente.png","styles":"bottom: 80px; left: 80px;"},{"src":"elemen_deporte.png","styles":"bottom: 56px; left: 248px;"}],"stylesInstructionRow":"margin-bottom: 10px;","stylesInstructionCol":"float: none; position: relative; margin: auto; height: 119px; left: 70px; width: 686px;","instruction":{"hasContent":true,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","contentStyles":"width: 50%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px;","instructionStyles":"width: 50%; height: 118px;","contentMainStyles":"height: 62px; font-size:12px;","title":"Gráfica de barras","text":"Daniel preguntó a sus amigos cuál es su deporte favorito y organizó la información en una gráfica.","iconInstruction":"pr-icon pr-icon-circle-arrow half","instruction":"Haz clic sobre cada deporte para visualizar su gráfica.","contentIcon":"pr-icon-notebook"},"stylesMainContent":"width: 686px; left: 70px;","table":{"stylesContainer":"width: 170px; float: left;","titles":[{"title":"Deportes"},{"title":"Niños y niñas"}],"items":[[{"text":"Natación"},{"text":"4"}],[{"text":"Fútbol"},{"text":"7"}],[{"text":"Baloncesto"},{"text":"3"}],[{"text":"Voleibol"},{"text":"2"}],[{"text":"Ciclismo"},{"text":"3"}]]},"stylesGraphicContainer":"width: 450px; float: right;","method":0,"graphicData":{"width":450,"height":320,"atlasMap":"deporte_favorito_tabla.png","media":false,"buttons":[{"x":110,"y":285,"btn":"natacion"},{"x":174,"y":285,"btn":"futbol"},{"x":232,"y":285,"btn":"baloncest"},{"x":307,"y":285,"btn":"voleibol"},{"x":365,"y":285,"btn":"ciclismo"}],"bars":[{"x":142,"y":272,"name":"g1"},{"x":200,"y":272,"name":"g2"},{"x":265,"y":272,"name":"g3"},{"x":331,"y":272,"name":"g4"},{"x":395,"y":272,"name":"g5"}],"atlasJson":"{\"frames\":[{\"filename\":\"ciclismo\",\"frame\":{\"x\":137,\"y\":407,\"w\":58,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":58,\"h\":17},\"sourceSize\":{\"w\":58,\"h\":17}},{\"filename\":\"futbol\",\"frame\":{\"x\":0,\"y\":371,\"w\":52,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":52,\"h\":17},\"sourceSize\":{\"w\":52,\"h\":17}},{\"filename\":\"baloncest\",\"frame\":{\"x\":25,\"y\":389,\"w\":68,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":68,\"h\":17},\"sourceSize\":{\"w\":68,\"h\":17}},{\"filename\":\"bg\",\"frame\":{\"x\":0,\"y\":0,\"w\":506,\"h\":370},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":506,\"h\":370},\"sourceSize\":{\"w\":506,\"h\":370}},{\"filename\":\"g5\",\"frame\":{\"x\":507,\"y\":273,\"w\":24,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":74},\"sourceSize\":{\"w\":24,\"h\":74}},{\"filename\":\"g1\",\"frame\":{\"x\":507,\"y\":0,\"w\":24,\"h\":99},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":99},\"sourceSize\":{\"w\":24,\"h\":99}},{\"filename\":\"g2\",\"frame\":{\"x\":507,\"y\":100,\"w\":24,\"h\":172},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":172},\"sourceSize\":{\"w\":24,\"h\":172}},{\"filename\":\"g3\",\"frame\":{\"x\":507,\"y\":348,\"w\":24,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":74},\"sourceSize\":{\"w\":24,\"h\":74}},{\"filename\":\"g4\",\"frame\":{\"x\":0,\"y\":389,\"w\":24,\"h\":49},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":49},\"sourceSize\":{\"w\":24,\"h\":49}},{\"filename\":\"voleibol\",\"frame\":{\"x\":25,\"y\":407,\"w\":52,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":52,\"h\":17},\"sourceSize\":{\"w\":52,\"h\":17}},{\"filename\":\"natacion\",\"frame\":{\"x\":78,\"y\":407,\"w\":58,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":58,\"h\":17},\"sourceSize\":{\"w\":58,\"h\":17}}]}"}}', 1, 5, true, '2014-11-19 09:40:29.86523', '2014-12-09 03:11:49.441439', 'tema-2-3', 6);
INSERT INTO course_data VALUES (14, 'Actividades de evidencia', 11, '{"tableName":"header_mat_750.png","downloadInstruction":{"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","iconInstruction":"pr-icon pr-icon-circle-arrow half","instructionStyles":"width: 100%; height: 100px; margin-top: 18px;","instruction":"Haz clic sobre el ícono superior para descargar las actividades."},"uploadInstruction":{"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","iconInstruction":"pr-icon pr-icon-circle-mouse half","instructionStyles":"width: 100%; height: 100px; margin-top: 18px;","instruction":"Arrastra el documento hacia el recuadro para enviar las actividades de evidencia."}}', 2, 5, true, '2015-01-29 09:41:05.165385', '2015-01-29 09:41:05.165385', 'evidencia', 14);
INSERT INTO course_data VALUES (21, 'Tema 4', 13, '{"lessonTitle":"Traslaciones","instruction":{"mainClasses":"col-md-10 col-sm-11 center-block","containerClasses":"vertical-center-instruction","hasContent":true,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%; display: table;","contentStyles":"width: 40%; display: table-cell; float: none !important; vertical-align: middle;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 24px;","instructionStyles":"width: 60%; height: 100px; padding: 16px 0; display: table-cell; float: none !important; vertical-align: middle;","contentMainStyles":"width: 100%; font-size: 12px;","contentIcon":"pr-icon-notebook","title":"Traslaciones","text":"Trasladar una figura es realizar su desplazamiento sin girarla. Para indicar una traslación se usa una flecha que muestra hacia donde se realiza el movimiento.","iconInstruction":"pr-icon pr-icon-circle-arrow half","instruction":"Haz clic sobre la imagen para observa su traslación."},"containersClass":"col-md-4 col-ms-4","itemContainersStyles":"height: 100%; padding: 0;","animation":true,"containers":[[{"contentMainClass":"tema4_translacion1","containerClasses":"transparent-background","hasContent":true,"hasHeader":false,"showContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentMainStyles":"width: 100%; background-color: transparent; cursor: pointer; box-shadow: none;","main":{"empty":true,"image":{"src":"tema4_translacion1.png","animation":"tema4_translacion1.gif"},"imageContainer":{"styles":"width: 100%; padding-top: 18px;"}}},{"contentMainClass":"tema4_translacion2","containerClasses":"transparent-background","hasContent":true,"hasHeader":false,"showContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentMainStyles":"width: 100%; background-color: transparent; cursor: pointer; box-shadow: none;","main":{"empty":true,"image":{"src":"tema4_translacion2.png","animation":"tema4_translacion2.gif"},"imageContainer":{"styles":"width: 100%;"}}},{"contentMainClass":"tema4_translacion3","containerClasses":"transparent-background","hasContent":true,"hasHeader":false,"showContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentMainStyles":"width: 100%; background-color: transparent; cursor: pointer; box-shadow: none;","main":{"empty":true,"image":{"src":"tema4_translacion3.png","animation":"tema4_translacion3.gif"},"imageContainer":{"styles":"width: 100%;"}}}]]}', 1, 6, true, '2015-02-19 14:46:44.507961', '2015-02-19 14:46:44.507961', 'tema-4-1', 7);
INSERT INTO course_data VALUES (15, 'Introducción', 2, '{"intro":"Muchos objetos a nuestro alrededor tienen apariencia de figura geométrica, en algunos casos estos se encuentran modificados sin cambiar su forma.<br /><br />En esta lección descubrirás:<br /><br />Cómo están clasificados los cuadriláteros y cuáles son los movimientos que se pueden realizar sobre una figura plana.","standard":"<ul><li>Identifico, represento y utilizo ángulos en giros, aberturas, inclinaciones, figuras, puntas y esquinas en situaciones estáticas y dinámicas.</li><li>Identifico y justifico relaciones de congruencia y semejanza entre figuras.</li></ul>","element":"<ul><li>Conocer ángulos en giros, aberturas, inclinaciones, figuras, puntas y esquinas en situaciones estáticas y dinámicas.</li><li>Identificar figuras congruentes y semejantes.</li></ul>"}', 0, 6, true, '2015-02-03 10:11:10.613303', '2015-02-03 10:11:10.613303', 'intro', 1);
INSERT INTO course_data VALUES (18, 'Tema 1', 14, '{"lessonTitle":"Clasificación de paralelogramos","footerBackground":"#607944","footerHeight":"244px","images":[{"src":"tema1_paralelogramo_cubos.png","styles":"left: 122px; bottom: 114px;"}],"instruction":{"mainClasses":"col-md-6 col-sm-6","hasContent":true,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 24px;","contentStyles":"width: 100%; height: 115px;","instructionStyles":"width: 100%; height: 100px;","contentMainStyles":"width: 100%; font-size: 12px;","contentIcon":"pr-icon-notebook","title":"Clasificación de paralelogramos","text":"Los paralelogramos son cuadriláteros que tienen dos pares de lados paralelos. Estos se clasifican de la siguiente manera.","iconInstruction":"pr-icon pr-icon-circle-arrow half","instruction":"Haz clic sobre el nombre para conocer su forma y sus características."},"tabs":{"containerClass":"col-md-6 col-sm-6","navTabsClasses":"col-md-3","navTabs":[{"name":"Cuadrado","tooltip":{"placement":"top","image":"tema1_paralelogramo_cuadrado_xs.png","alt":"Cuadrado"}},{"name":"Romboide","tooltip":{"placement":"top","image":"tema1_paralelogramo_romboide_xs.png","alt":"Romboide"}},{"name":"Rombo","tooltip":{"placement":"top","image":"tema1_paralelogramo_rombo_xs.png","alt":"Rombo"}},{"name":"Rectángulo","tooltip":{"placement":"top","image":"tema1_paralelogramo_rectangulo_xs.png","alt":"Rectángulo"}}],"contentTabs":[{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; padding-top: 0;","headerClasses":"gray-header","title":"Cuadrado","contentIcon":"pr-icon-container-audio dark","headerButton":{"audio":"sample.mp3"},"main":{"image":{"src":"tema1_paralelogramo_cuadrado.png","styles":"margin-top: 4px; margin-left: auto; margin-right: auto;"},"imageContainer":{"styles":"width: 100%; height: 275px;","containerClasses":"pr-vertical-center"},"listItems":[{"text":"Cuatro (4) lados iguales."},{"text":"Cuatro (4) ángulos rectos."}]}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; padding-top: 0;","headerClasses":"gray-header","title":"Romboide","contentIcon":"pr-icon-container-audio dark","headerButton":{"audio":"sample.mp3"},"main":{"image":{"src":"tema1_paralelogramo_romboide.png","styles":"margin-top: 4px; margin-left: auto; margin-right: auto;"},"imageContainer":{"styles":"width: 100%; height: 275px;","containerClasses":"pr-vertical-center"},"listItems":[{"text":"Lados iguales 2 a 2."},{"text":"Ángulos iguales 2 a 2."}]}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; padding-top: 0;","headerClasses":"gray-header","title":"Rombo","contentIcon":"pr-icon-container-audio dark","headerButton":{"audio":"sample.mp3"},"main":{"image":{"src":"tema1_paralelogramo_rombo.png","styles":"margin-top: 4px; margin-left: auto; margin-right: auto;"},"imageContainer":{"styles":"width: 100%; height: 275px;","containerClasses":"pr-vertical-center"},"listItems":[{"text":"4 lados iguales."},{"text":"Ángulos iguales 2 a 2."}]}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; padding-top: 0;","headerClasses":"gray-header","title":"Rectángulo","contentIcon":"pr-icon-container-audio dark","headerButton":{"audio":"sample.mp3"},"main":{"image":{"src":"tema1_paralelogramo_rectangulo.png","styles":"margin-top: 4px; margin-left: auto; margin-right: auto;"},"imageContainer":{"styles":"width: 100%; height: 275px;","containerClasses":"pr-vertical-center"},"listItems":[{"text":"Lados iguales 2 a 2."},{"text":"Lados iguales 2 a 2."}]}}]}}', 1, 6, true, '2015-02-11 16:38:41.600544', '2015-02-11 16:38:41.600544', 'tema-1-3', 4);
INSERT INTO course_data VALUES (19, 'Tema 2', 13, '{"lessonTitle":"Polígonos regulares","instruction":{"mainClasses":"col-md-10 col-sm-11 center-block","containerClasses":"vertical-center-instruction","hasContent":true,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%; display: table;","contentStyles":"width: 40%; display: table-cell; float: none !important; vertical-align: middle;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 24px;","instructionStyles":"width: 60%; display: table-cell; float: none !important; vertical-align: middle;","contentMainStyles":"width: 100%; font-size: 12px;","contentIcon":"pr-icon-notebook","title":"Polígonos regulares","text":"Un polígono regular tiene todos sus lados de igual longitud y todos sus ángulos de igual medida.","iconInstruction":"pr-icon pr-icon-circle-arrow half","instruction":"Haz clic sobre cada nombre y conoce algunos ejemplos."},"containersClass":"col-md-3","containers":[[{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 16px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height:279px; padding-top: 0;","title":"Triángulo equilátero","contentIcon":"pr-icon-picture","headerButton":{"is":true},"main":{"empty":true,"image":{"src":"tema2_triangulo.png"},"imageContainer":{"styles":"width: 100%; padding-top: 14px;"}}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 16px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height:279px; padding-top: 0;","title":"Cuadrado","contentIcon":"pr-icon-picture","headerButton":{"is":true},"main":{"empty":true,"image":{"src":"tema2_cuadrado.png"},"imageContainer":{"styles":"width: 100%; padding-top: 14px;"}}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 16px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height:279px; padding-top: 0;","title":"Pentágono regular","contentIcon":"pr-icon-picture","headerButton":{"is":true},"main":{"empty":true,"image":{"src":"tema2_pentagono.png"},"imageContainer":{"styles":"width: 100%; padding-top: 14px;"}}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 16px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height:279px; padding-top: 0;","title":"Hexágono regular","contentIcon":"pr-icon-picture","headerButton":{"is":true},"main":{"empty":true,"image":{"src":"tema2_hexagono.png"},"imageContainer":{"styles":"width: 100%; padding-top: 14px;"}}}]]}', 1, 6, true, '2015-02-16 10:51:26.736258', '2015-02-16 10:51:26.736258', 'tema-2-1', 5);
INSERT INTO course_data VALUES (11, 'Actividad 3. Conceptualización', 9, '{"footerBackground":"#3DB2BC","footerHeight":"197px","hasGrade":true,"images":[{"src":"julian_estudio.png","alt":"Imagen con un niño que tiene un lápiz en la mano con el cual escribe sobre una hoja como muestra de estudio.","styles":"bottom: 10px; left: 0;","imageStyles":"width: 95%;"}],"instructionRow":{"class":"col-md-6"},"instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 101px;","iconInstruction":"pr-icon pr-icon-circle-pencil half","instruction":"La gráfica representa los minutos de estudio de Julián durante cada día de la semana.  Observa la gráfica y escribe sobre la línea la respuesta correspondiente."},"canvasRow":{"class":"col-md-6 pull-right","styles":"height: 200px;"},"activityName":"study_minutes","method":0,"canvasData":{"width":1720,"height":857,"maxHeight":200,"maxWidth":540,"atlasMap":"horizontal_bars_sheet.png","media":false,"horizontal":true,"bars":[{"x":400,"y":241,"name":"b1"},{"x":400,"y":338,"name":"b2"},{"x":400,"y":435,"name":"b3"},{"x":400,"y":535,"name":"b4"},{"x":400,"y":630,"name":"b5"}],"atlasJson":"{\"frames\":[{\"filename\":\"b1\",\"frame\":{\"x\":0,\"y\":1014,\"w\":508,\"h\":77},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":508,\"h\":77},\"sourceSize\":{\"w\":508,\"h\":77}},{\"filename\":\"b2\",\"frame\":{\"x\":0,\"y\":936,\"w\":813,\"h\":77},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":813,\"h\":77},\"sourceSize\":{\"w\":813,\"h\":77}},{\"filename\":\"b3\",\"frame\":{\"x\":509,\"y\":1014,\"w\":406,\"h\":77},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":406,\"h\":77},\"sourceSize\":{\"w\":406,\"h\":77}},{\"filename\":\"b4\",\"frame\":{\"x\":814,\"y\":936,\"w\":610,\"h\":77},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":610,\"h\":77},\"sourceSize\":{\"w\":610,\"h\":77}},{\"filename\":\"b5\",\"frame\":{\"x\":0,\"y\":858,\"w\":1219,\"h\":77},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":1219,\"h\":77},\"sourceSize\":{\"w\":1219,\"h\":77}},{\"filename\":\"bg\",\"frame\":{\"x\":0,\"y\":0,\"w\":1702,\"h\":857},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":1702,\"h\":857},\"sourceSize\":{\"w\":1702,\"h\":857}}],\"meta\":{\"app\":\"http://www.leshylabs.com/apps/sstool/\",\"version\":\"Leshy SpriteSheet Tool v0.8.1\",\"size\":{\"w\":1702,\"h\":1091},\"scale\":1}}"},"pattern":"word","activity":{"class":"col-md-12","styles":"margin-top: 10px;","hasIcon":true,"formClass":"col-md-6 pull-right","items":[{"text":"¿Cuántos minutos estudió el día martes?","answer":60},{"text":"¿Qué día estudió 50 minutos?","answer":"viernes"},{"text":"¿Cuál día estudió más tiempo?","answer":"lunes"},{"text":"¿Cuántos minutos estudió durante la semana?","answer":350},{"text":"¿Cuántos minutos más estudió el jueves comparado con el viernes?","answer":30},{"text":"¿Cuál día estudió menos tiempo?","answer":"miércoles"}]}}', 2, 5, true, '2014-12-04 09:31:39.622601', '2014-12-09 09:03:11.886879', 'actividad-1-3', 11);
INSERT INTO course_data VALUES (17, 'Tema 1', 13, '{"lessonTitle":"Clasificación de cuadriláteros","footerBackground":"#607944","footerHeight":"244px","instruction":{"mainClasses":"col-md-8 col-sm-11 center-block","hasContent":true,"hasInstruction":true,"hasHeader":false,"hasSmallTitle":true,"instructionBg":"yellow-background","styles":"width: 100%; display: table;","contentStyles":"width: 23%; height: 115px; display: table-cell; vertical-align: middle; float: none !important;","instructionStyles":"width: 77%; height: 135px; display: table-cell; vertical-align: middle; float: none !important;","contentMainStyles":"width: 100%; height: 100%; font-size: 23px; text-align: center; padding-top: 20px; padding-left: 10px; padding-right: 10px;","text":"Clasificación de cuadriláteros","instruction":"Haz clic sobre cada nombre para conocer su forma y sus características.","iconInstruction":"pr-icon pr-icon-circle-arrow half","contentClasses":"pr-pacifico-font"},"containersClass":"col-md-4","containers":[[{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height:279px; padding-top: 0;","title":"Rectángulo","contentIcon":"pr-icon-container-audio","headerButton":{"audio":"sample.mp3"},"main":{"empty":true,"image":{"src":"tema1_cuadrilatero_rectangulo.png","styles":"margin-top: 4px; display: inline-block;"},"imageContainer":{"styles":"width: 100%; height: 214px; display: table;","containerStyles":"width: auto; display: table-cell; vertical-align: middle; margin-left: auto; margin-right: auto; text-align: center;"},"listItems":[{"text":"Tiene cuatro ángulos rectos."}]}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 279px; padding-top: 0;","title":"Cuadrado","contentIcon":"pr-icon-container-audio","headerButton":{"audio":"sample.mp3"},"main":{"empty":true,"image":{"src":"tema1_cuadrilatero_cuadrado.png","styles":"height: 200px; margin-top: 4px; display: inline-block;"},"imageContainer":{"styles":"width: 100%; height: 214px; display: table;","containerStyles":"width: auto; display: table-cell; vertical-align: middle; margin-left: auto; margin-right: auto; text-align: center;"},"listItems":[{"text":"Posee cuatro lados de igual longitud y cuatro ángulos rectos."}]}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 279px; padding-top: 0;","title":"Rombo","contentIcon":"pr-icon-container-audio","headerButton":{"audio":"sample.mp3"},"main":{"empty":true,"image":{"src":"tema1_cuadrilatero_rombo.png","styles":"height: 200px; margin-top: 4px; display: inline-block;"},"imageContainer":{"styles":"width: 100%; height: 214px; display: table;","containerStyles":"width: auto; display: table-cell; vertical-align: middle; margin-left: auto; margin-right: auto; text-align: center;"},"listItems":[{"text":"Tiene los cuatro lados de igual longitud."}]}}],[{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 279px; padding-top: 0;","title":"Paralelogramo","contentIcon":"pr-icon-container-audio","headerButton":{"audio":"sample.mp3"},"main":{"empty":true,"image":{"src":"tema1_cuadrilatero_paralelogramo.png","styles":"margin-top: 4px; display: inline-block;"},"imageContainer":{"styles":"width: 100%; height: 214px; display: table;","containerStyles":"width: auto; display: table-cell; vertical-align: middle; margin-left: auto; margin-right: auto; text-align: center;"},"listItems":[{"text":"Los dos pares de lados opuestos son paralelos."}]}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 279px; padding-top: 0;","title":"Trapecio","contentIcon":"pr-icon-container-audio","headerButton":{"audio":"sample.mp3"},"main":{"empty":true,"image":{"src":"tema1_cuadrilatero_trapecio.png","styles":"margin-top: 4px; display: inline-block;"},"imageContainer":{"styles":"width: 100%; height: 214px; display: table;","containerStyles":"width: auto; display: table-cell; vertical-align: middle; margin-left: auto; margin-right: auto; text-align: center;"},"listItems":[{"text":"Tiene un par de lados opuestos paralelos."}]}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 279px; padding-top: 0;","title":"Trapezoide","contentIcon":"pr-icon-container-audio","headerButton":{"audio":"sample.mp3"},"main":{"empty":true,"image":{"src":"tema1_cuadrilatero_trapezoide.png","styles":"margin-top: 4px; display: inline-block;"},"imageContainer":{"styles":"width: 100%; height: 214px; display: table;","containerStyles":"width: auto; display: table-cell; vertical-align: middle; margin-left: auto; margin-right: auto; text-align: center;"},"listItems":[{"text":"No tiene lados opuestos paralelos."}]}}]]}', 1, 6, true, '2015-02-05 14:41:25.000321', '2015-02-05 14:41:25.000321', 'tema-1-2', 3);
INSERT INTO course_data VALUES (20, 'Tema 3', 15, '{"lessonTitle":"Congruencia de figuras planas","instruction":{"mainClasses":"pull-left","hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 100px;","iconInstruction":"pr-icon pr-icon-circle-arrow half","instruction":"Haz clic sobre el nombre de cada efecto y observa algunos ejemplos de figuras congruentes."},"mainContainer":{"classes":"col-md-6 col-sm-6"},"content":{"contentMainClass":"anslide-image-container","containerClasses":"col-md-6 col-sm-6","hasContent":true,"styles":"width: 100%; padding: 0;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 18px; height: 47px; text-transform: initial;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%;","title":"Congruencia de figuras planas","contentIcon":"pr-icon-notebook","text":"Dos figuras son congruentes si tienen la misma forma y el mismo tamaño aún después de desplazar, girar o reflejar.<br><br>Sus vértices deben coincidir, sus ángulos deben tener la misma medida y sus lados igual longitud.","main":{"image":{"src":"tema3_figuras_congruentes.gif","styles":"margin-top: 4px; display: inline-block;"},"imageContainer":{"styles":"width: 100%; padding-top: 14px; margin: 40px 0;"},"bottomText":{"text":"Figuras congruentes","styles":"width: 184px; height: 38px; background-color: #FFF; float: none; margin-left: auto; margin-right: auto; margin-top: 14px; font-size: 18px; text-align: center; line-height: 2;","classes":"pr-bezel-top pr-pacifico-font"}}},"animation":true,"slide":{"classes":"col-md-12","controlRight":{"styles":"top: 182px; right: 4px; z-index: 10;"},"controlLeft":{"styles":"top: 182px; left: 4px; z-index: 10;"},"items":[{"containerClasses":"transparent-background","hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","headerClasses":"gray-header pr-pacifico-font","contentHeaderStyles":"width:100%; background-color: transparent !important; box-shadow: none","contentTitleStyles":"font-size: 18px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; background-color: transparent;","title":"Congruencia de figuras planas","contentIcon":"pr-icon-container-audio dark","headerButton":{"audio":"sample.mp3"},"main":{"empty":true,"image":{"src":"tema3_reflejada_girada.png","animation":"tema3_reflejada_girada.gif"},"imageContainer":{"styles":"width: 100%;"}}},{"containerClasses":"transparent-background","hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","headerClasses":"gray-header pr-pacifico-font","contentHeaderStyles":"width:100%; background-color: transparent !important; box-shadow: none","contentTitleStyles":"font-size: 18px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; background-color: transparent;","title":"Reflejada y desplazada","contentIcon":"pr-icon-container-audio dark","headerButton":{"audio":"sample.mp3"},"main":{"empty":true,"image":{"src":"tema3_reflejada_desplazada.png","animation":"tema3_reflejada_desplazada.gif"},"imageContainer":{"styles":"width: 100%;"}}},{"containerClasses":"transparent-background","hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","headerClasses":"gray-header pr-pacifico-font","contentHeaderStyles":"width:100%; background-color: transparent !important; box-shadow: none","contentTitleStyles":"font-size: 18px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; background-color: transparent;","title":"Girada","contentIcon":"pr-icon-container-audio dark","headerButton":{"audio":"sample.mp3"},"main":{"empty":true,"image":{"src":"tema3_girada.png","animation":"tema3_girada.gif"},"imageContainer":{"styles":"width: 100%;"}}}]}}', 1, 6, true, '2015-02-17 15:39:02.367298', '2015-02-17 15:39:02.367298', 'tema-3-1', 6);
INSERT INTO course_data VALUES (22, 'Tema 5', 12, '{"lessonTitle":"Rotaciones","footerBackground":"#4F6C7E","footerHeight":"195px","images":[{"src":"tema5_hamster.png","styles":"bottom: 30px; left: -7px;"}],"animationContainer":{"classes":"col-md-5"},"itemsClass":"col-md-6","animationContent":{"hasContent":true,"hasInstruction":true,"styles":"width: 100%;","contentMainClass":"animation-content","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 24px; height: 47px;","stylesContentIcon":"height: 47px;","contentMainStyles":"font-size: 14px; width: 100%; padding-top: 12px;","title":"Rotaciones","text":"Rotar una figura es girarla alrededor de un punto fijo. Rotaciones.","contentIcon":"pr-icon-notebook","instructionBg":"yellow-background","instructionStyles":"width: 100%; height: 100px;","iconInstruction":"pr-icon pr-icon-circle-arrow half","instruction":"Haz clic sobre cada figura para observar su rotación."},"hasAnimation":true,"itemsContainer":{"classes":"col-md-7"},"items":[[{"hasContent":true,"hasHeader":false,"containerStyles":"margin: 0;","styles":"width: 100%;","contentStyles":"width: 100%;","contentMainStyles":"width: 100%; height: 242px; border-radius: 6px;","contentMain":{"styles":"height: 100%;"},"main":{"image":{"src":"tema5_rotacion1.png","animation":"tema5_rotacion1.gif","styles":"height: 100%"},"imageContainer":{"styles":"height: 100%","containerStyles":"height: 100%;"}},"event":true,"bodyEvent":true},{"hasContent":true,"hasHeader":false,"containerStyles":"margin: 0;","styles":"width: 100%;","contentStyles":"width: 100%;","contentMainStyles":"width: 100%; height: 242px; border-radius: 6px;","contentMain":{"styles":"height: 100%;"},"main":{"image":{"src":"tema5_rotacion2.png","animation":"tema5_rotacion2.gif","styles":"height: 100%"},"imageContainer":{"styles":"height: 100%","containerStyles":"height: 100%;"}},"event":true,"bodyEvent":true}],[{"hasContent":true,"hasHeader":false,"containerStyles":"margin: 0;","styles":"width: 100%;","contentStyles":"width: 100%;","contentMainStyles":"width: 100%; height: 242px; border-radius: 6px;","contentMain":{"styles":"height: 100%;"},"main":{"image":{"src":"tema5_rotacion3.png","animation":"tema5_rotacion3.gif","styles":"height: 100%"},"imageContainer":{"styles":"height: 100%","containerStyles":"height: 100%;"}},"event":true,"bodyEvent":true},{"hasContent":true,"hasHeader":false,"containerStyles":"margin: 0;","styles":"width: 100%;","contentStyles":"width: 100%;","contentMainStyles":"width: 100%; height: 242px; border-radius: 6px;","contentMain":{"styles":"height: 100%;"},"main":{"image":{"src":"tema5_rotacion4.png","animation":"tema5_rotacion4.gif","styles":"height: 100%"},"imageContainer":{"styles":"height: 100%","containerStyles":"height: 100%;"}},"event":true,"bodyEvent":true}]]}', 1, 6, true, '2015-02-23 11:50:27.565826', '2015-02-23 11:50:27.565826', 'tema-5-1', 8);
INSERT INTO course_data VALUES (23, 'Tema 6', 15, '{"lessonTitle":"Reflexiones y simetría","instruction":{"containerClasses":"transparent-background","mainClasses":"pull-left","mainStyles":"width: 100%;","hasContent":true,"hasHeader":false,"styles":"width: 100%;","contentStyles":"width: 100%;","contentMainStyles":"width: 100%; background-color: transparent;","main":{"image":{"src":"tema6_sol_nubes.png","styles":"margin: auto;"},"imageContainer":{"styles":"width: 100%;","containerStyles":"width: 100%;"}}},"mainContainer":{"classes":"col-md-6 col-sm-6"},"content":{"contentMainClass":"anslide-image-container","containerClasses":"col-md-6 col-sm-6","hasContent":true,"styles":"width: 100%; padding: 0;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 18px; height: 47px; text-transform: initial;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%;","title":"Reflexiones y simetría","contentIcon":"pr-icon-notebook","text":"La reflexión de una figura es desplazar todos los puntos de ésta a igual distancia de una recta llamada eje de simetría. La figura original y la reflejada son simétricas respecto al eje de reflexión.","main":{"image":{"src":"tema6_reflexiones_simetria.gif","styles":"margin: auto; display: block;"},"imageContainer":{"styles":"width: 100%; padding-top: 14px;"}},"hasInstruction":true,"instructionBg":"yellow-background","instructionStyles":"width: 100%; height: 100px;","iconInstruction":"pr-icon pr-icon-circle-arrow half","instruction":"Haz clic sobre el eje de simetría de cada figura para observar su reflexión."},"animation":true,"slide":{"classes":"col-md-12","controlRight":{"styles":"top: 182px; right: 4px; z-index: 10;"},"controlLeft":{"styles":"top: 182px; left: 4px; z-index: 10;"},"items":[{"containerClasses":"transparent-background","hasContent":true,"bodyEvent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","headerClasses":"gray-header pr-pacifico-font","contentHeaderStyles":"width:100%; background-color: transparent !important; box-shadow: none","contentTitleStyles":"font-size: 18px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; background-color: transparent;","title":"Ejemplos de reflexiones y simetría","contentIcon":"pr-icon-picture dark","main":{"empty":true,"image":{"src":"tema6_reflexion1.png","animation":"tema6_reflexion1.gif","styles":"margin: auto;"},"imageContainer":{"styles":"width: 100%;"},"bottomText":{"text":"Eje de simetría","styles":"background-color: #F5F5F5; padding: 3px 8px; position: absolute; bottom: 5px; left: 50%; margin-left: -56px; border-radius: 4px; font-size: 18px; font-weight: 100;","classes":"pr-bezel-top"}}},{"containerClasses":"transparent-background","hasContent":true,"bodyEvent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","headerClasses":"gray-header pr-pacifico-font","contentHeaderStyles":"width:100%; background-color: transparent !important; box-shadow: none","contentTitleStyles":"font-size: 18px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; background-color: transparent;","title":"Ejemplos de reflexiones y simetría","contentIcon":"pr-icon-picture dark","main":{"empty":true,"image":{"src":"tema6_reflexion2.png","animation":"tema6_reflexion2.gif","styles":"margin: auto;"},"imageContainer":{"styles":"width: 100%;"},"bottomText":{"text":"Eje de simetría","styles":"background-color: #F5F5F5; padding: 3px 8px; position: absolute; bottom: 5px; left: 50%; margin-left: -56px; border-radius: 4px; font-size: 18px; font-weight: 100;","classes":"pr-bezel-top"}}},{"containerClasses":"transparent-background","hasContent":true,"bodyEvent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","headerClasses":"gray-header pr-pacifico-font","contentHeaderStyles":"width:100%; background-color: transparent !important; box-shadow: none","contentTitleStyles":"font-size: 18px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; background-color: transparent;","title":"Ejemplos de reflexiones y simetría","contentIcon":"pr-icon-picture dark","main":{"empty":true,"image":{"src":"tema6_reflexion3.png","animation":"tema6_reflexion3.gif","styles":"margin: auto;"},"imageContainer":{"styles":"width: 100%;"},"bottomText":{"text":"Eje de simetría","styles":"background-color: #F5F5F5; padding: 3px 8px; position: absolute; bottom: 5px; left: 50%; margin-left: -56px; border-radius: 4px; font-size: 18px; font-weight: 100;","classes":"pr-bezel-top"}}},{"containerClasses":"transparent-background","hasContent":true,"bodyEvent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","headerClasses":"gray-header pr-pacifico-font","contentHeaderStyles":"width:100%; background-color: transparent !important; box-shadow: none","contentTitleStyles":"font-size: 18px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; background-color: transparent;","title":"Ejemplos de reflexiones y simetría","contentIcon":"pr-icon-picture dark","main":{"empty":true,"image":{"src":"tema6_reflexion4.png","animation":"tema6_reflexion4.gif","styles":"margin: auto;"},"imageContainer":{"styles":"width: 100%;"},"bottomText":{"text":"Eje de simetría","styles":"background-color: #F5F5F5; padding: 3px 8px; position: absolute; bottom: 5px; left: 50%; margin-left: -56px; border-radius: 4px; font-size: 18px; font-weight: 100;","classes":"pr-bezel-top"}}}]}}', 1, 6, true, '2015-02-24 14:28:13.797045', '2015-02-24 14:28:13.797045', 'tema-6-1', 9);
INSERT INTO course_data VALUES (28, 'Actividad 1. Socialización', 18, '{"footerBackground":"#3D8596","footerHeight":"548px","clues":{"vertical":{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 24px; height: 47px;","stylesContentIcon":"height: 47px;","contentMainStyles":"font-size: 14px; width: 100%; padding-top: 12px;","headerClasses":"gray-header","title":"Vertical","contentIcon":"pr-icon-notebook","direction":true,"clues":{"2":{"text":"Polígono de cuatro lados."},"4":{"text":"Es desplazar todos los puntos de una figura a igual distancia de una recta llamada eje de simetría."},"6":{"text":"Es girar una figura alrededor de un punto fijo."},"8":{"text":"Figura cerrada, formada por segmentos de recta que no se cruzan."}}},"horizontal":{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 24px; height: 47px;","stylesContentIcon":"height: 47px;","contentMainStyles":"font-size: 14px; width: 100%; padding-top: 12px;","headerClasses":"gray-header","title":"Horizontal","contentIcon":"pr-icon-notebook","direction":false,"clues":{"1":{"text":"Cuadrilátero que tiene sus lados opuestos paralelos."},"3":{"text":"Cuadrilátero que no tiene lados opuestos paralelos."},"5":{"text":"Tiene lados paralelos 2 a 2 y ángulos iguales 2 a 2."},"7":{"text":"Es un cuadrilátero que tiene todos sus lados de igual longitud."},"9":{"text":"Tiene dos de sus lados opuestos."}}}},"words":{"vertical":{"2":{"word":"CUADRILATERO","positions":{"begin":{"x":11,"y":3},"end":{"x":11,"y":15}}},"4":{"word":"TRASLACION","positions":{"begin":{"x":7,"y":1},"end":{"x":7,"y":11}}},"6":{"word":"ROTACION","positions":{"begin":{"x":2,"y":8},"end":{"x":2,"y":16}}},"8":{"word":"POLIGONO","positions":{"begin":{"x":13,"y":0},"end":{"x":13,"y":8}}}},"horizontal":{"1":{"word":"PARALELOGRAMO","positions":{"begin":{"x":0,"y":6},"end":{"x":13,"y":6}}},"3":{"word":"TRAPEZOIDE","positions":{"begin":{"x":4,"y":15},"end":{"x":14,"y":15}}},"5":{"word":"ROMBOIDE","positions":{"begin":{"x":1,"y":9},"end":{"x":9,"y":9}}},"7":{"word":"CUADRADO","positions":{"begin":{"x":2,"y":3},"end":{"x":10,"y":3}}},"9":{"word":"TRAPECIO","positions":{"begin":{"x":6,"y":13},"end":{"x":14,"y":13}}}}}}', 2, 6, true, '2015-03-09 14:50:25.540065', '2015-03-09 14:50:25.540065', 'actividad-3-1', 14);
INSERT INTO course_data VALUES (8, 'Tema 2', 7, '{"lessonTitle":"Media","footerBackground":"#4D869F","footerHeight":"167px","secondTemplate":true,"stylesContentRow":"padding: 0; margin-bottom: 16px;","content":{"hasContent":true,"hasInstruction":false,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px; height: 47px;","stylesContentIcon":"height: 47px;","contentMainStyles":"font-size: 12px; width: 100%; padding-top: 12px;","title":"Media","text":"<b>La media de un conjunto de datos se halla sumando los datos y dividiendo esa suma por la cantidad de datos</b>. Andrés tiene 24 globos de cuatro colores diferentes tal como lo indica la tabla. ¿Cuántos globos de cada color tendría Andrés, si tuviera la misma cantidad de globos por color?<ul class=\"list-unstyled pr-list-items\"><li class=\"pr-list-item\"><h4><strong>Suma de datos: 8 + 6 + 3 + 7 = 24 globos</strong></h4></li><li class=\"pr-list-item\"><h4><strong>Cantidad de datos: 4 colores</strong></h4></li></ul>","contentIcon":"pr-icon-notebook"},"stylesInstructionRow":"padding: 0;","instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 100px;","iconInstruction":"pr-icon pr-icon-circle-arrow half","instruction":"Haz clic sobre la tabla de datos para observar cómo se construye la media."},"table":{"stylesContainer":"margin-bottom: 16px;","titles":[{"title":"Color"},{"title":"Azul"},{"title":"Verde"},{"title":"Amarillo"},{"title":"Rojo"}],"items":[[{"text":"Cantidad"},{"text":"8"},{"text":"6"},{"text":"3"},{"text":"7"}]]},"method":0,"graphicData":{"width":472,"height":370,"atlasMap":"media_sheet.png","media":true,"bars":[{"x":160,"y":271,"name":"b1"},{"x":225,"y":271,"name":"b2"},{"x":289,"y":271,"name":"b3"},{"x":352,"y":270,"name":"b4"}],"medias":[{"x":160,"y":73,"name":"b6"},{"x":289,"y":198,"name":"b7"},{"x":352,"y":98,"name":"b5"}],"atlasJson":"{\"frames\":[{\"filename\":\"bg\",\"frame\":{\"x\":52,\"y\":0,\"w\":472,\"h\":370},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":472,\"h\":370},\"sourceSize\":{\"w\":472,\"h\":370}},{\"filename\":\"line\",\"frame\":{\"x\":0,\"y\":374,\"w\":322,\"h\":4},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":322,\"h\":4},\"sourceSize\":{\"w\":322,\"h\":4}},{\"filename\":\"b1\",\"frame\":{\"x\":0,\"y\":175,\"w\":24,\"h\":198},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":198},\"sourceSize\":{\"w\":24,\"h\":198}},{\"filename\":\"b2\",\"frame\":{\"x\":0,\"y\":26,\"w\":24,\"h\":148},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":148},\"sourceSize\":{\"w\":24,\"h\":148}},{\"filename\":\"b3\",\"frame\":{\"x\":26,\"y\":51,\"w\":24,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":74},\"sourceSize\":{\"w\":24,\"h\":74}},{\"filename\":\"b4\",\"frame\":{\"x\":26,\"y\":201,\"w\":24,\"h\":172},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":172},\"sourceSize\":{\"w\":24,\"h\":172}},{\"filename\":\"b5\",\"frame\":{\"x\":0,\"y\":0,\"w\":25,\"h\":25},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":25,\"h\":25},\"sourceSize\":{\"w\":25,\"h\":25}},{\"filename\":\"b6\",\"frame\":{\"x\":26,\"y\":0,\"w\":25,\"h\":50},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":25,\"h\":50},\"sourceSize\":{\"w\":25,\"h\":50}},{\"filename\":\"b7\",\"frame\":{\"x\":26,\"y\":126,\"w\":24,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":74},\"sourceSize\":{\"w\":24,\"h\":74}}],\"meta\":{\"app\":\"http://www.leshylabs.com/apps/sstool/\",\"version\":\"Leshy SpriteSheet Tool v0.8.1\",\"size\":{\"w\":524,\"h\":378},\"scale\":1}}"}}', 1, 5, true, '2014-11-26 09:09:31.430011', '2014-12-05 09:55:30.808371', 'tema-2-5', 8);
INSERT INTO course_data VALUES (27, 'Actividad 2. Dinamización', 8, '{"footerBackground":"#5C969E","footerHeight":"195px","stylesInstructionRow":"float: none; margin: auto; height: 100px;","instruction":{"class":"col-md-7","hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"float: 0; margin: auto; width: 100%;","instructionStyles":"width: 100%; height: 100px;","iconInstruction":"pr-icon pr-icon-circle-mouse half","instruction":"Arrastra hasta el final de las flechas la figura correspondiente a la traslación."},"activityName":"activity2_dinamization","activity":{"width":870,"height":390,"atlasMap":"actividad2_dinamizacion_sheet.png","targetChange":true,"audios":[{"name":"figure1","file":"mat409.mp3"},{"name":"figure2","file":"mat409.mp3"},{"name":"figure3","file":"mat409.mp3"}],"assetPositions":[{"x":31,"y":15,"name":"container"},{"x":31,"y":140,"name":"container"},{"x":31,"y":264,"name":"container"},{"x":10,"y":65,"name":"triangle_container","finalPosition":{"x":220,"y":28},"groupPositions":{"x":220,"y":28},"audio":{"x":0,"y":0,"name":"title_audio_container","active":"title_audio_container_active","audioFile":{"name":"figure1"},"icon":{"x":15,"y":3,"name":"icon_audio"},"text":{"x":67,"y":3,"text":"Figura 1","styles":{"font":"24px Pacifico","fill":"#333333"}}},"answer":{"value":1},"noArrow":true,"icons":{"x":266,"y":88}},{"x":75,"y":65,"name":"trapeze_container","finalPosition":{"x":220,"y":28},"groupPositions":{"x":917,"y":28},"audio":{"x":0,"y":0,"name":"title_audio_container","active":"title_audio_container_active","audioFile":{"name":"figure2"},"icon":{"x":15,"y":3,"name":"icon_audio"},"text":{"x":67,"y":3,"text":"Figura 2","styles":{"font":"24px Pacifico","fill":"#333333"}}},"answer":{"value":2},"noArrow":true,"icons":{"x":266,"y":88}},{"x":10,"y":85,"name":"cross_container","finalPosition":{"x":220,"y":28},"groupPositions":{"x":1575,"y":28},"audio":{"x":0,"y":0,"name":"title_audio_container","active":"title_audio_container_active","audioFile":{"name":"figure3"},"icon":{"x":15,"y":3,"name":"icon_audio"},"text":{"x":67,"y":3,"text":"Figura 3","styles":{"font":"24px Pacifico","fill":"#333333"}}},"answer":{"value":3},"noArrow":true,"icons":{"x":266,"y":88}}],"shapeTarget":true,"drops":[{"x":575,"y":96,"w":250,"h":260,"finalPosition":{"x":575,"y":96}},{"x":1252,"y":95,"w":163,"h":284,"finalPosition":{"x":555,"y":95}},{"x":1878,"y":100,"w":249,"h":249,"finalPosition":{"x":524,"y":100}}],"fixedPosition":true,"drags":[{"x":45,"y":25,"name":"cross","value":3,"initialScale":{"x":0.37,"y":0.37},"finalPosition":{"x":523,"y":120}},{"x":45,"y":144,"name":"triangle","value":1,"initialScale":{"x":0.37,"y":0.37},"finalPosition":{"x":575,"y":95}},{"x":59,"y":267,"name":"trapeze","value":2,"initialScale":{"x":0.37,"y":0.37},"finalPosition":{"x":556,"y":97}}],"atlasJson":"{\"frames\":[{\"filename\":\"icon_right\",\"frame\":{\"x\":421,\"y\":689,\"w\":45,\"h\":45},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":45,\"h\":45},\"sourceSize\":{\"w\":45,\"h\":45}},{\"filename\":\"icon_wrong\",\"frame\":{\"x\":421,\"y\":643,\"w\":45,\"h\":45},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":45,\"h\":45},\"sourceSize\":{\"w\":45,\"h\":45}},{\"filename\":\"container\",\"frame\":{\"x\":421,\"y\":532,\"w\":120,\"h\":110},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":120,\"h\":110},\"sourceSize\":{\"w\":120,\"h\":110}},{\"filename\":\"title_audio_container\",\"frame\":{\"x\":0,\"y\":863,\"w\":571,\"h\":39},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":571,\"h\":39},\"sourceSize\":{\"w\":571,\"h\":39}},{\"filename\":\"title_audio_container_active\",\"frame\":{\"x\":0,\"y\":823,\"w\":571,\"h\":39},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":571,\"h\":39},\"sourceSize\":{\"w\":571,\"h\":39}},{\"filename\":\"icon_audio\",\"frame\":{\"x\":572,\"y\":863,\"w\":35,\"h\":30},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":30},\"sourceSize\":{\"w\":35,\"h\":30}},{\"filename\":\"triangle_container\",\"frame\":{\"x\":0,\"y\":0,\"w\":550,\"h\":265},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":550,\"h\":265},\"sourceSize\":{\"w\":550,\"h\":265}},{\"filename\":\"cross_container\",\"frame\":{\"x\":0,\"y\":266,\"w\":550,\"h\":265},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":550,\"h\":265},\"sourceSize\":{\"w\":550,\"h\":265}},{\"filename\":\"trapeze_container\",\"frame\":{\"x\":0,\"y\":532,\"w\":420,\"h\":290},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":420,\"h\":290},\"sourceSize\":{\"w\":420,\"h\":290}},{\"filename\":\"triangle\",\"frame\":{\"x\":551,\"y\":0,\"w\":250,\"h\":260},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":250,\"h\":260},\"sourceSize\":{\"w\":250,\"h\":260}},{\"filename\":\"cross\",\"frame\":{\"x\":551,\"y\":261,\"w\":249,\"h\":249},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":249,\"h\":249},\"sourceSize\":{\"w\":249,\"h\":249}},{\"filename\":\"trapeze\",\"frame\":{\"x\":551,\"y\":511,\"w\":163,\"h\":284},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":163,\"h\":284},\"sourceSize\":{\"w\":163,\"h\":284}}],\"meta\":{\"app\":\"http://www.leshylabs.com/apps/sstool/\",\"version\":\"Leshy SpriteSheet Tool v0.8.1\",\"size\":{\"w\":801,\"h\":902},\"scale\":1}}"}}', 2, 6, true, '2015-05-06 17:57:44.062232', '2015-05-06 17:57:44.062232', 'actividad-2-2', 13);
INSERT INTO course_data VALUES (9, 'Actividad 1. Conceptualización', 8, '{"footerBackground":"#3DB2BC","footerHeight":"243px","hasGrade":true,"images":[{"src":"puesto_helados.png","styles":"bottom: 150px; right: 0;"},{"src":"hombre_balotas.png","alt":"Señor haciendo girar una balotera con balotas de varios colores.","styles":"bottom: 12px; right: 40px;"}],"stylesInstructionRow":"float: none; height: 93px;","instruction":{"class":"col-md-7 center-block","hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 96px;","iconInstruction":"pr-icon pr-icon-circle-mouse half","instruction":"En la balotera hay 50 balotas marcadas del 0 al 49. Arrastra hasta el frente de cada evento las opciones <span class=\"dark-gray-text\">seguro</span>, <span class=\"dark-gray-text\">posible</span> e <span class=\"dark-gray-text\">imposible</span> según corresponda."},"activityContainerStyles":"margin-top: 5px;","activityName":"possibilities","activity":{"width":500,"height":350,"atlasMap":"possibilities_sheet.png","textStyles":{"font":"12px Open Sans","fill":"#3f3f41","fontSize":12,"align":"left"},"answerStyles":{"fontWeight":"bold","fontSize":14,"fill":"#CF0D25"},"assetPositions":[{"x":3,"y":3,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota con el número 15:"},"answer":{"x":403.1666666666667,"y":16.222222222222225,"answer":"Posible"},"icons":{"x":13,"y":6}},{"x":3,"y":51,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota con el número 60:"},"answer":{"x":395.3333333333331,"y":16.222222222222225,"answer":"Imposible"},"icons":{"x":13,"y":53}},{"x":3,"y":99,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota con un número menor a 50:"},"answer":{"x":401.83333333333326,"y":16.222222222222225,"answer":"Seguro"},"icons":{"x":13,"y":102}},{"x":3,"y":147,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota que no esté numerada:"},"answer":{"x":395.3333333333331,"y":16.222222222222225,"answer":"Imposible"},"icons":{"x":13,"y":150}},{"x":3,"y":194.81658119658107,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota con un número de un digito:"},"answer":{"x":403.1666666666667,"y":16.222222222222225,"answer":"Posible"},"icons":{"x":13,"y":197.51658119658103}},{"x":3,"y":262.77777777777777,"name":"buttons_container"}],"drops":[{"x":370,"y":3,"name":"active_bar"},{"x":370,"y":51,"name":"active_bar"},{"x":370,"y":99,"name":"active_bar"},{"x":370,"y":147,"name":"active_bar"},{"x":370,"y":194.81658119658107,"name":"active_bar"}],"dragsData":{"x":0,"y":8.846153846153852,"styles":{"font":"14px Open Sans","fontWeight":700,"fill":"#FFFFFF","align":"center"}},"drags":[{"x":83,"y":272,"name":"blue_draggable_block","value":"Seguro","text":{"text":"Seguro"}},{"x":83,"y":313,"name":"blue_draggable_block","value":"Seguro","text":{"text":"Seguro"}},{"x":192,"y":272,"name":"yellow_draggable_block","value":"Posible","text":{"text":"Posible"}},{"x":192,"y":313,"name":"yellow_draggable_block","value":"Posible","text":{"text":"Posible"}},{"x":301,"y":272,"name":"red_draggable_block","value":"Imposible","text":{"text":"Imposible"}},{"x":301,"y":313,"name":"red_draggable_block","value":"Imposible","text":{"text":"Imposible"}}],"atlasJson":"{\"frames\":[{\"filename\":\"buttons_container\",\"frame\":{\"x\":0,\"y\":0,\"w\":493,\"h\":90},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":493,\"h\":90},\"sourceSize\":{\"w\":493,\"h\":90}},{\"filename\":\"main_content_bar\",\"frame\":{\"x\":0,\"y\":91,\"w\":494,\"h\":41},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":494,\"h\":41},\"sourceSize\":{\"w\":494,\"h\":41}},{\"filename\":\"active_bar\",\"frame\":{\"x\":0,\"y\":133,\"w\":126,\"h\":41},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":126,\"h\":41},\"sourceSize\":{\"w\":126,\"h\":41}},{\"filename\":\"icon_right\",\"frame\":{\"x\":127,\"y\":133,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}},{\"filename\":\"icon_wrong\",\"frame\":{\"x\":163,\"y\":133,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}},{\"filename\":\"red_draggable_block\",\"frame\":{\"x\":235,\"y\":133,\"w\":102,\"h\":32},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":102,\"h\":32},\"sourceSize\":{\"w\":102,\"h\":32}},{\"filename\":\"blue_draggable_block\",\"frame\":{\"x\":338,\"y\":133,\"w\":102,\"h\":32},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":102,\"h\":32},\"sourceSize\":{\"w\":102,\"h\":32}},{\"filename\":\"yellow_draggable_block\",\"frame\":{\"x\":0,\"y\":175,\"w\":102,\"h\":32},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":102,\"h\":32},\"sourceSize\":{\"w\":102,\"h\":32}},{\"filename\":\"icon_arrow\",\"frame\":{\"x\":199,\"y\":133,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}}]}"}}', 2, 5, true, '2014-11-27 16:23:23.696081', '2015-01-15 16:51:49.041645', 'actividad-1-1', 9);
INSERT INTO course_data VALUES (24, 'Actividad 1. Conceptualización', 8, '{"footerBackground":"#5C969E","footerHeight":"197px","stylesInstructionRow":"float: none; height: 100px; width: 38%;","instruction":{"class":"col-md-5","hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 100px;","iconInstruction":"pr-icon pr-icon-circle-mouse half","instruction":"Arrastra cada nombre hasta ubicarlo sobre la figura correcta."},"activityContainerStyles":"margin-top: 5px; position: absolute; top: 0;","activityName":"activity1_conceptualization","activity":{"width":1000,"height":510,"atlasMap":"actividad1_conceptualizacion_sheet.png","answerStyles":{"fontSize":18,"fill":"#FFFFFF"},"assetPositions":[{"x":26,"y":101,"name":"drop_container","answer":{"x":72,"y":13,"answer":"Rectángulo"},"contentImage":{"x":7,"y":47,"name":"shape_rectangle"},"icons":{"x":35,"y":102}},{"x":217,"y":101,"name":"drop_container","answer":{"x":72,"y":13,"answer":"Trapecio"},"contentImage":{"x":7,"y":47,"name":"shape_trapeze"},"icons":{"x":226,"y":102}},{"x":407,"y":101,"name":"drop_container","answer":{"x":72,"y":13,"answer":"Cuadrado"},"contentImage":{"x":7,"y":47,"name":"shape_square"},"icons":{"x":416,"y":102}},{"x":598,"y":101,"name":"drop_container","answer":{"x":72,"y":13,"answer":"Trapezoide"},"contentImage":{"x":7,"y":47,"name":"shape_trapezoid"},"icons":{"x":606,"y":102}},{"x":789,"y":101,"name":"drop_container","answer":{"x":72,"y":13,"answer":"Rombo"},"contentImage":{"x":7,"y":47,"name":"shape_rhombus"},"icons":{"x":798,"y":102}},{"x":26,"y":305,"name":"drop_container","answer":{"x":72,"y":13,"answer":"Trapecio"},"contentImage":{"x":7,"y":47,"name":"shape_trapeze2"},"icons":{"x":35,"y":306}},{"x":217,"y":305,"name":"drop_container","answer":{"x":72,"y":13,"answer":"Romboide"},"contentImage":{"x":7,"y":47,"name":"shape_rhomboid"},"icons":{"x":226,"y":306}},{"x":407,"y":305,"name":"drop_container","answer":{"x":72,"y":13,"answer":"Rombo"},"contentImage":{"x":7,"y":47,"name":"shape_rhombus2"},"icons":{"x":418,"y":306}},{"x":598,"y":305,"name":"drop_container","answer":{"x":72,"y":13,"answer":"Romboide"},"contentImage":{"x":7,"y":47,"name":"shape_rhomboid2"},"icons":{"x":606,"y":306}},{"x":789,"y":305,"name":"drop_container","answer":{"x":72,"y":13,"answer":"Trapezoide"},"contentImage":{"x":7,"y":47,"name":"shape_trapezoid2"},"icons":{"x":798,"y":306}}],"drops":[{"x":26,"y":144,"name":"drop_box","contentImage":{"x":7,"y":5,"name":"shape_rectangle"}},{"x":217,"y":144,"name":"drop_box","contentImage":{"x":7,"y":5,"name":"shape_trapeze"}},{"x":407,"y":144,"name":"drop_box","contentImage":{"x":7,"y":5,"name":"shape_square"}},{"x":598,"y":144,"name":"drop_box","contentImage":{"x":7,"y":5,"name":"shape_trapezoid"}},{"x":789,"y":144,"name":"drop_box","contentImage":{"x":7,"y":5,"name":"shape_rhombus"}},{"x":26,"y":348,"name":"drop_box","contentImage":{"x":7,"y":5,"name":"shape_trapeze2"}},{"x":217,"y":348,"name":"drop_box","contentImage":{"x":7,"y":5,"name":"shape_rhomboid"}},{"x":407,"y":348,"name":"drop_box","contentImage":{"x":7,"y":5,"name":"shape_rhombus2"}},{"x":598,"y":348,"name":"drop_box","contentImage":{"x":7,"y":5,"name":"shape_rhomboid2"}},{"x":789,"y":348,"name":"drop_box","contentImage":{"x":7,"y":5,"name":"shape_trapezoid2"}}],"dragsData":{"x":0,"y":13,"styles":{"font":"18px Open Sans","fontWeight":500,"fill":"#333333","align":"center"}},"drags":[{"x":339,"y":0.7,"name":"drag_box","value":"Trapecio","text":{"text":"Trapecio"}},{"x":339,"y":40,"name":"drag_box","value":"Trapezoide","text":{"text":"Trapezoide"}},{"x":466,"y":0.7,"name":"drag_box","value":"Rombo","text":{"text":"Rombo"}},{"x":466,"y":40,"name":"drag_box","value":"Rombo","text":{"text":"Rombo"}},{"x":593,"y":0.7,"name":"drag_box","value":"Cuadrado","text":{"text":"Cuadrado"}},{"x":593,"y":40,"name":"drag_box","value":"Rectángulo","text":{"text":"Rectángulo"}},{"x":720,"y":0.7,"name":"drag_box","value":"Romboide","text":{"text":"Romboide"}},{"x":720,"y":40,"name":"drag_box","value":"Romboide","text":{"text":"Romboide"}},{"x":847,"y":0.7,"name":"drag_box","value":"Trapezoide","text":{"text":"Trapezoide"}},{"x":847,"y":40,"name":"drag_box","value":"Trapecio","text":{"text":"Trapecio"}}],"atlasJson":"{\"frames\":[{\"filename\":\"drop_container\",\"frame\":{\"x\":0,\"y\":0,\"w\":183,\"h\":207},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":183,\"h\":207},\"sourceSize\":{\"w\":183,\"h\":207}},{\"filename\":\"drop_box\",\"frame\":{\"x\":0,\"y\":208,\"w\":183,\"h\":153},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":183,\"h\":153},\"sourceSize\":{\"w\":183,\"h\":153}},{\"filename\":\"drag_box\",\"frame\":{\"x\":184,\"y\":292,\"w\":125,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":125,\"h\":35},\"sourceSize\":{\"w\":125,\"h\":35}},{\"filename\":\"shape_rectangle\",\"frame\":{\"x\":184,\"y\":146,\"w\":170,\"h\":145},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":170,\"h\":145},\"sourceSize\":{\"w\":170,\"h\":145}},{\"filename\":\"shape_trapeze\",\"frame\":{\"x\":0,\"y\":362,\"w\":170,\"h\":145},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":170,\"h\":145},\"sourceSize\":{\"w\":170,\"h\":145}},{\"filename\":\"shape_square\",\"frame\":{\"x\":171,\"y\":362,\"w\":170,\"h\":145},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":170,\"h\":145},\"sourceSize\":{\"w\":170,\"h\":145}},{\"filename\":\"shape_trapezoid\",\"frame\":{\"x\":355,\"y\":0,\"w\":170,\"h\":145},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":170,\"h\":145},\"sourceSize\":{\"w\":170,\"h\":145}},{\"filename\":\"shape_rhombus\",\"frame\":{\"x\":355,\"y\":146,\"w\":170,\"h\":145},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":170,\"h\":145},\"sourceSize\":{\"w\":170,\"h\":145}},{\"filename\":\"shape_trapeze2\",\"frame\":{\"x\":355,\"y\":292,\"w\":170,\"h\":145},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":170,\"h\":145},\"sourceSize\":{\"w\":170,\"h\":145}},{\"filename\":\"shape_rhomboid\",\"frame\":{\"x\":0,\"y\":508,\"w\":170,\"h\":145},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":170,\"h\":145},\"sourceSize\":{\"w\":170,\"h\":145}},{\"filename\":\"shape_rhombus2\",\"frame\":{\"x\":171,\"y\":508,\"w\":170,\"h\":145},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":170,\"h\":145},\"sourceSize\":{\"w\":170,\"h\":145}},{\"filename\":\"shape_rhomboid2\",\"frame\":{\"x\":342,\"y\":508,\"w\":170,\"h\":145},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":170,\"h\":145},\"sourceSize\":{\"w\":170,\"h\":145}},{\"filename\":\"shape_trapezoid2\",\"frame\":{\"x\":184,\"y\":0,\"w\":170,\"h\":145},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":170,\"h\":145},\"sourceSize\":{\"w\":170,\"h\":145}},{\"filename\":\"icon_arrow\",\"frame\":{\"x\":355,\"y\":438,\"w\":40,\"h\":40},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":40,\"h\":40},\"sourceSize\":{\"w\":40,\"h\":40}},{\"filename\":\"icon_right\",\"frame\":{\"x\":396,\"y\":438,\"w\":40,\"h\":40},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":40,\"h\":40},\"sourceSize\":{\"w\":40,\"h\":40}},{\"filename\":\"icon_wrong\",\"frame\":{\"x\":437,\"y\":438,\"w\":40,\"h\":40},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":40,\"h\":40},\"sourceSize\":{\"w\":40,\"h\":40}}],\"meta\":{\"app\":\"http://www.leshylabs.com/apps/sstool/\",\"version\":\"Leshy SpriteSheet Tool v0.8.1\",\"size\":{\"w\":525,\"h\":653},\"scale\":1}}"}}', 2, 6, true, '2015-02-26 11:14:22.206923', '2015-02-26 11:14:22.206923', 'actividad-1-1', 10);
INSERT INTO course_data VALUES (26, 'Actividad 1. Dinamización', 8, '{"footerBackground":"#5C969E","footerHeight":"325px","stylesInstructionRow":"float: none; margin: auto; height: 100px;","instruction":{"class":"col-md-7","hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"float: 0; margin: auto;","instructionStyles":"width: 100%; height: 100px;","iconInstruction":"pr-icon pr-icon-circle-mouse half","instruction":"Arrastra hasta las canastas cada polígono diferenciando si es regular o irregular."},"activityContainerStyles":"width: 950px; margin-top: 70px; margin-left: -475px; position: absolute; top: 0; left: 50%;","activityName":"activity1_dinamizacion","activity":{"width":950,"height":414,"singleTarget":true,"atlasMap":"actividad1_dinamizacion_sheet.png","textStyles":{"fontSize":14,"fill":"#333333"},"assetPositions":[{"x":752,"y":64,"name":"boxes"},{"x":323,"y":32,"name":"toys_table"},{"x":8,"y":4,"name":"library_lamp"},{"x":696,"y":369,"name":"bar_container","text":{"x":52,"y":13,"text":"Polígonos regulares"},"answer":{"value":"r"},"icons":{"x":696,"y":369}},{"x":27,"y":369,"name":"bar_container","text":{"x":52,"y":13,"text":"Polígonos irregulares"},"answer":{"value":"i"},"icons":{"x":27,"y":369}}],"drops":[{"x":688,"y":187,"name":"red_basket","totalItems":6},{"x":20,"y":187,"name":"blue_basket","totalItems":6}],"drags":[{"x":232,"y":82,"name":"irregular_polygon1","value":"i"},{"x":545,"y":321,"name":"irregular_polygon2","value":"i"},{"x":416,"y":265,"name":"irregular_polygon3","value":"i"},{"x":240,"y":263,"name":"irregular_polygon4","value":"i"},{"x":482,"y":68,"name":"irregular_polygon5","value":"i"},{"x":117,"y":125,"name":"irregular_polygon6","value":"i"},{"x":340,"y":95,"name":"regular_polygon1","value":"r"},{"x":272,"y":150,"name":"regular_polygon2","value":"r"},{"x":682,"y":83,"name":"regular_polygon3","value":"r"},{"x":610,"y":236,"name":"regular_polygon4","value":"r"},{"x":500,"y":181,"name":"regular_polygon5","value":"r"},{"x":403,"y":189,"name":"regular_polygon6","value":"r"}],"atlasJson":"{\"frames\":[{\"filename\":\"blue_basket\",\"frame\":{\"x\":316,\"y\":0,\"w\":235,\"h\":180},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":235,\"h\":180},\"sourceSize\":{\"w\":235,\"h\":180}},{\"filename\":\"red_basket\",\"frame\":{\"x\":316,\"y\":181,\"w\":235,\"h\":170},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":235,\"h\":170},\"sourceSize\":{\"w\":235,\"h\":170}},{\"filename\":\"boxes\",\"frame\":{\"x\":0,\"y\":364,\"w\":190,\"h\":140},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":190,\"h\":140},\"sourceSize\":{\"w\":190,\"h\":140}},{\"filename\":\"toys_table\",\"frame\":{\"x\":0,\"y\":505,\"w\":450,\"h\":175},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":450,\"h\":175},\"sourceSize\":{\"w\":450,\"h\":175}},{\"filename\":\"library_lamp\",\"frame\":{\"x\":0,\"y\":0,\"w\":315,\"h\":198},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":315,\"h\":198},\"sourceSize\":{\"w\":315,\"h\":198}},{\"filename\":\"bar_container\",\"frame\":{\"x\":316,\"y\":450,\"w\":220,\"h\":41},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":220,\"h\":41},\"sourceSize\":{\"w\":220,\"h\":41}},{\"filename\":\"icon_right\",\"frame\":{\"x\":451,\"y\":505,\"w\":40,\"h\":40},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":40,\"h\":40},\"sourceSize\":{\"w\":40,\"h\":40}},{\"filename\":\"icon_wrong\",\"frame\":{\"x\":492,\"y\":505,\"w\":40,\"h\":40},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":40,\"h\":40},\"sourceSize\":{\"w\":40,\"h\":40}},{\"filename\":\"icon_arrow\",\"frame\":{\"x\":191,\"y\":437,\"w\":40,\"h\":40},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":40,\"h\":40},\"sourceSize\":{\"w\":40,\"h\":40}},{\"filename\":\"irregular_polygon1\",\"frame\":{\"x\":473,\"y\":352,\"w\":60,\"h\":40},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":60,\"h\":40},\"sourceSize\":{\"w\":60,\"h\":40}},{\"filename\":\"irregular_polygon2\",\"frame\":{\"x\":136,\"y\":199,\"w\":121,\"h\":57},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":121,\"h\":57},\"sourceSize\":{\"w\":121,\"h\":57}},{\"filename\":\"irregular_polygon3\",\"frame\":{\"x\":451,\"y\":546,\"w\":85,\"h\":125},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":85,\"h\":125},\"sourceSize\":{\"w\":85,\"h\":125}},{\"filename\":\"irregular_polygon4\",\"frame\":{\"x\":0,\"y\":266,\"w\":123,\"h\":97},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":123,\"h\":97},\"sourceSize\":{\"w\":123,\"h\":97}},{\"filename\":\"irregular_polygon5\",\"frame\":{\"x\":316,\"y\":352,\"w\":59,\"h\":97},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":59,\"h\":97},\"sourceSize\":{\"w\":59,\"h\":97}},{\"filename\":\"irregular_polygon6\",\"frame\":{\"x\":232,\"y\":437,\"w\":81,\"h\":37},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":81,\"h\":37},\"sourceSize\":{\"w\":81,\"h\":37}},{\"filename\":\"regular_polygon1\",\"frame\":{\"x\":191,\"y\":364,\"w\":77,\"h\":72},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":77,\"h\":72},\"sourceSize\":{\"w\":77,\"h\":72}},{\"filename\":\"regular_polygon2\",\"frame\":{\"x\":124,\"y\":266,\"w\":85,\"h\":80},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":85,\"h\":80},\"sourceSize\":{\"w\":85,\"h\":80}},{\"filename\":\"regular_polygon3\",\"frame\":{\"x\":70,\"y\":199,\"w\":65,\"h\":65},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":65,\"h\":65},\"sourceSize\":{\"w\":65,\"h\":65}},{\"filename\":\"regular_polygon4\",\"frame\":{\"x\":210,\"y\":266,\"w\":70,\"h\":70},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":70,\"h\":70},\"sourceSize\":{\"w\":70,\"h\":70}},{\"filename\":\"regular_polygon5\",\"frame\":{\"x\":376,\"y\":352,\"w\":96,\"h\":83},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":96,\"h\":83},\"sourceSize\":{\"w\":96,\"h\":83}},{\"filename\":\"regular_polygon6\",\"frame\":{\"x\":0,\"y\":199,\"w\":69,\"h\":66},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":69,\"h\":66},\"sourceSize\":{\"w\":69,\"h\":66}}],\"meta\":{\"app\":\"http://www.leshylabs.com/apps/sstool/\",\"version\":\"Leshy SpriteSheet Tool v0.8.1\",\"size\":{\"w\":551,\"h\":680},\"scale\":1}}"}}', 2, 6, true, '2015-04-29 17:30:10.07798', '2015-04-29 17:30:10.07798', 'actividad-2-1', 12);
INSERT INTO course_data VALUES (4, 'Tema 2', 5, '{"lessonTitle":"Organizando datos","footerBackground":"#4D869F","footerHeight":"214px","images":[{"src":"puesto_frutas.png","styles":"left: 0; bottom: 10px;"},{"src":"pesa_y_frutas.png","styles":"right: 70px; bottom: 80px;"}],"stylesCont":"padding-left: 170px;","stylesTableCont":"padding-right: 170px;","content":{"hasContent":true,"hasInstruction":false,"title":"Organizando datos","text":"Carlos quiere organizar en las siguiente tabla las frutas que comió su familia durante  el fin de semana.<br><br><b>Sábado</b>: tres peras, dos bananos, cinco manzanas y cuatro mandarinas.<br><br><b>Domingo</b>: una pera, seis bananos, cuatro manzanas y tres mandarinas.","contentIcon":"pr-icon-notebook","contentHeaderStyles":"width: 100%;","contentTitleStyles":"font-size: 20px;","contentMainStyles":"width: 100%;"},"instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","instructionStyles":"height: 102px;","iconInstruction":"pr-icon pr-icon-circle-pencil half","instruction":"Ayuda a Carlos escribiendo la información en la tabla."},"pattern":"num","table":{"titles":[{"title":"Fruta","secondTitle":"Día"},{"title":"Sábado"},{"title":"Domingo"},{"title":"Total"}],"items":[[{"text":"Manzana"},{"answer":5},{"answer":4},{"answer":9}],[{"text":"Mandarina"},{"answer":4},{"answer":3},{"answer":7}],[{"text":"Banano"},{"answer":2},{"answer":6},{"answer":8}],[{"text":"Pera"},{"answer":3},{"answer":1},{"answer":4}],[{"text":"Total"},{"answer":14},{"answer":14},{"answer":28}]]}}', 1, 5, true, '2014-11-10 12:37:24.089205', '2014-11-24 11:28:28.911048', 'tema-2-1', 4);
INSERT INTO course_data VALUES (7, 'Tema 2', 7, '{"lessonTitle":"Pictogramas","footerBackground":"#4D869F","footerHeight":"163px","images":[{"src":"carpa_circo.png","styles":"bottom: 100px; right: 10px;"}],"content":{"hasContent":true,"hasInstruction":false,"styles":"width: 61.965812%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px; height: 47px;","stylesContentIcon":"height: 47px;","contentMainStyles":"font-size: 12px; width: 100%; padding-top: 12px;","title":"Pictogramas","text":"En un pictograma se utiliza una figura para representar cierta cantidad de datos. En este caso, la figura <span class=\"pr-icon pr-icon-tiny-people dark\" style=\"margin-bottom: -6px;\"></span> representa 100 personas. Observa el siguiente ejemplo.","contentIcon":"pr-icon-notebook"},"stylesInstructionRow":"margin-top: 10px","stylesInstructionCol":"width: 100%; padding: 0","instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 40%; margin-left: 21.965811%;","instructionStyles":"width: 100%; height: 100px;","iconInstruction":"pr-icon pr-icon-circle-arrow half","instruction":"Haz clic sobre cada día de la semana para visualizar el pictograma correspondiente."},"stylesMainContent":"height: auto; min-height: 40%; float: left; width: 100%;","table":{"stylesContainer":"width: 149px; float: left; margin-top: -115px;","note":{"text":"Cantidad de personas que asisten a un circo durante la semana:"},"stylesMainContent":"min-height: 40%; height: auto;","stylesItems":"padding: 0; height: 36px;","titles":[{"title":"Día"},{"title":"Personas"}],"items":[[{"text":"Lunes"},{"text":"100"}],[{"text":"Martes"},{"text":"300"}],[{"text":"Miércoles"},{"text":"200"}],[{"text":"Jueves"},{"text":"400"}],[{"text":"Viernes"},{"text":"500"}],[{"text":"Sábado"},{"text":"900"}],[{"text":"Domingo"},{"text":"700"}],[{"text":"TOTAL"},{"text":"3100"}]]},"method":1,"stylesGraphicContainer":"float: left; margin-left: 8.1578947%; width: 38.947368%;","graphicData":{"width":349,"height":220,"atlasMap":"pictograma_sheet.png","positions":[{"y":0,"dia":"lunes"},{"y":32,"dia":"martes"},{"y":64,"dia":"miercoles"},{"y":96,"dia":"jueves"},{"y":128,"dia":"viernes"},{"y":160,"dia":"sabado"},{"y":192,"dia":"domingo"}],"positions2":[{"x":113},{"x":138},{"x":164},{"x":189},{"x":215},{"x":243},{"x":269},{"x":294},{"x":320}],"itemsPositions":[{"first":2,"times":1},{"first":34,"times":3},{"first":67,"times":2},{"first":99,"times":4},{"first":131,"times":5},{"first":163,"times":9},{"first":195,"times":7}],"atlasJson":"{\"frames\":[{\"filename\":\"domingo\",\"frame\":{\"x\":0,\"y\":24,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"jueves\",\"frame\":{\"x\":108,\"y\":24,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"lunes\",\"frame\":{\"x\":216,\"y\":24,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"martes\",\"frame\":{\"x\":0,\"y\":48,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"sabado\",\"frame\":{\"x\":108,\"y\":48,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"viernes\",\"frame\":{\"x\":216,\"y\":48,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"miercoles\",\"frame\":{\"x\":0,\"y\":72,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"barra\",\"frame\":{\"x\":0,\"y\":0,\"w\":345,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":345,\"h\":23},\"sourceSize\":{\"w\":345,\"h\":23}},{\"filename\":\"pre\",\"frame\":{\"x\":108,\"y\":72,\"w\":20,\"h\":19},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":20,\"h\":19},\"sourceSize\":{\"w\":20,\"h\":19}}]}"}}', 1, 5, true, '2014-11-20 17:02:43.601155', '2014-12-02 17:59:10.043907', 'tema-2-4', 7);
INSERT INTO course_data VALUES (10, 'Actividad 2. Conceptualización', 8, '{"footerBackground":"#3DB2BC","footerHeight":"243px","hasGrade":true,"stylesInstructionRow":"float: left; height: 100px; position: absolute; margin-left: 130px; width: 48%;","instruction":{"class":"col-md-12","hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 96px;","iconInstruction":"pr-icon pr-icon-circle-mouse half","instruction":"Arrastra cada descripción ubicándola debajo de la canasta correspondiente, de acuerdo al evento que sea <span class=\"dark-gray-text\">más probable</span> o <span class=\"dark-gray-text\">menos probable</span> que suceda."},"activityContainerStyles":"margin-top: -20px;","activityName":"basket_balls","activity":{"width":1024,"height":510,"atlasMap":"balls_baskets_sheet.png","textStyles":{"font":"Open Sans","fontSize":18,"fontWeight":500,"fill":"#FFFFFF","align":"left"},"answerStyles":{"wordWrap":true,"wordWrapWidth":168,"font":"11px Open Sans","fill":"#000000","fontWeight":100,"lineSpacing":-7},"assetPositions":[{"x":26,"y":142.25,"name":"table_balls_baskets"},{"x":83.1818,"y":347.25,"name":"box_tablecloth","text":{"x":69.62068965517244,"y":11.689655172413794,"text":"Canasta 1"},"answer":{"x":0,"y":74,"center":true,"answer":"Es más probable coger al azar una bola azul que una verde o roja.","value":4},"icons":{"x":95.5555,"y":350.9166}},{"x":309,"y":347.25,"name":"box_tablecloth","text":{"x":69.6206,"y":11.6896,"text":"Canasta 2"},"answer":{"x":0,"y":74,"center":true,"answer":"Es menos probable coger al azar una bola verde que una roja.","value":2},"icons":{"x":321,"y":350.9166}},{"x":536,"y":347.25,"name":"box_tablecloth","text":{"x":69.62068965517244,"y":11.689655172413794,"text":"Canasta 3"},"answer":{"x":0,"y":74,"center":true,"answer":"Es más probable coger al azar una bola verde que una azul.","value":1},"icons":{"x":548,"y":350.9166}},{"x":766,"y":347.25,"name":"box_tablecloth","text":{"x":69.62068965517244,"y":11.689655172413794,"text":"Canasta 4"},"answer":{"x":0,"y":74,"center":true,"answer":"Es igual de probable coger al azar una bola verde, una bola roja o una bola azul","value":3},"icons":{"x":778.000000000001,"y":350.9166}}],"drops":[{"x":83.0769,"y":389.9423,"name":"box_drop"},{"x":308.25,"y":389.9423,"name":"box_drop"},{"x":536.5,"y":389.9423,"name":"box_drop"},{"x":765.7839,"y":389.9423,"name":"box_drop"}],"dragsData":{"x":0,"y":16,"wrap":148,"center":true,"styles":{"font":"11px Open Sans","fill":"#3f3f41","lineSpacing":-7}},"drags":[{"x":692,"y":2.625,"name":"box_drag","value":1,"text":{"text":"Es más probable coger al azar una bola verde que una azul."}},{"x":862,"y":2.625,"name":"box_drag","value":2,"text":{"text":"Es menos probable coger al azar una bola verde que una roja."}},{"x":692,"y":79.5,"name":"box_drag","value":3,"text":{"text":"Es igual de probable coger al azar una bola verde, una bola roja o una bola azul."}},{"x":862,"y":79.5,"name":"box_drag","value":4,"text":{"text":"Es igual de probable coger al azar una bola verde, una bola roja o una bola azul."}}],"atlasJson":"{\"frames\":[{\"filename\":\"table_balls_baskets\",\"frame\":{\"x\":0,\"y\":0,\"w\":971,\"h\":304},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":971,\"h\":304},\"sourceSize\":{\"w\":971,\"h\":304}},{\"filename\":\"box_tablecloth\",\"frame\":{\"x\":0,\"y\":305,\"w\":180,\"h\":177},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":180,\"h\":177},\"sourceSize\":{\"w\":180,\"h\":177}},{\"filename\":\"box_drop\",\"frame\":{\"x\":181,\"y\":305,\"w\":180,\"h\":108},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":180,\"h\":108},\"sourceSize\":{\"w\":180,\"h\":108}},{\"filename\":\"box_drag\",\"frame\":{\"x\":362,\"y\":305,\"w\":161,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":161,\"h\":74},\"sourceSize\":{\"w\":161,\"h\":74}},{\"filename\":\"icon_right\",\"frame\":{\"x\":181,\"y\":414,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}},{\"filename\":\"icon_wrong\",\"frame\":{\"x\":217,\"y\":414,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}},{\"filename\":\"icon_arrow\",\"frame\":{\"x\":253,\"y\":414,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}}]}"}}', 2, 5, true, '2014-12-03 09:51:37.87321', '2014-12-09 09:09:14.957647', 'actividad-1-2', 10);
INSERT INTO course_data VALUES (29, 'Actividades de evidencia', 11, '{"tableName":"header_mat_750.png","downloadInstruction":{"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","iconInstruction":"pr-icon pr-icon-circle-arrow half","instructionStyles":"width: 100%; height: 100px; margin-top: 18px;","instruction":"Haz clic sobre el ícono superior para descargar las actividades."},"uploadInstruction":{"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","iconInstruction":"pr-icon pr-icon-circle-mouse half","instructionStyles":"width: 100%; height: 100px; margin-top: 18px;","instruction":"Arrastra el documento hacia el recuadro para enviar las actividades de evidencia."}}', 2, 6, true, '2015-05-15 10:58:32.609415', '2015-05-15 10:58:32.609415', 'evidencia', 15);
INSERT INTO course_data VALUES (12, 'Actividad 1. Dinamización', 9, '{"footerBackground":"#4F643A","footerHeight":"286px","hasGrade":true,"images":[{"src":"casa.png","alt":"Casa pequeña con techo rojo, una puerta y una ventana.","styles":"bottom: 190px; left: 85px;"},{"src":"asfalto.png","styles":"bottom: 0; left: 0; z-index: -4;"}],"instructionRow":{"class":"col-md-8 pull-right"},"instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 100px;","iconInstruction":"pr-icon pr-icon-circle-pencil half","instruction":"Observa el siguiente pictograma y contesta las preguntas escribiendo sobre cada línea.  Ten en cuenta que cada <span class=\"pr-icon pr-icon-tiny-house\" style=\"margin: 0 2px -6px 2px;\"></span> representa 1.000 casas."},"canvasRow":{"class":"col-md-4 col-md-offset-4","styles":"margin-top: 10px;"},"activityName":"house_count","method":1,"canvasData":{"width":1421,"height":1211,"maxWidth":350,"maxHeight":280,"atlasMap":"houses_sheet.png","animationOnly":true,"positions":[{"y":0,"dia":"lunes"},{"y":186,"dia":"martes"},{"y":363,"dia":"miercoles"},{"y":545,"dia":"jueves"},{"y":721,"dia":"viernes"},{"y":911,"dia":"sabado"},{"y":1094,"dia":"domingo"}],"positions2":[{"x":300},{"x":436},{"x":572},{"x":703},{"x":843},{"x":975},{"x":1113},{"x":1246}],"itemsPositions":[{"first":10,"times":2},{"first":194,"times":4},{"first":376,"times":8},{"first":556,"times":3},{"first":740,"times":6},{"first":921,"times":5},{"first":1105,"times":7}],"atlasJson":"{\"frames\":[{\"filename\":\"domingo\",\"frame\":{\"x\":0,\"y\":119,\"w\":268,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":268,\"h\":118},\"sourceSize\":{\"w\":268,\"h\":118}},{\"filename\":\"jueves\",\"frame\":{\"x\":269,\"y\":119,\"w\":268,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":268,\"h\":118},\"sourceSize\":{\"w\":268,\"h\":118}},{\"filename\":\"lunes\",\"frame\":{\"x\":538,\"y\":119,\"w\":268,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":268,\"h\":118},\"sourceSize\":{\"w\":268,\"h\":118}},{\"filename\":\"martes\",\"frame\":{\"x\":807,\"y\":119,\"w\":268,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":268,\"h\":118},\"sourceSize\":{\"w\":268,\"h\":118}},{\"filename\":\"miercoles\",\"frame\":{\"x\":1076,\"y\":119,\"w\":268,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":268,\"h\":118},\"sourceSize\":{\"w\":268,\"h\":118}},{\"filename\":\"pre\",\"frame\":{\"x\":538,\"y\":238,\"w\":132,\"h\":99},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":132,\"h\":99},\"sourceSize\":{\"w\":132,\"h\":99}},{\"filename\":\"sabado\",\"frame\":{\"x\":0,\"y\":238,\"w\":268,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":268,\"h\":118},\"sourceSize\":{\"w\":268,\"h\":118}},{\"filename\":\"viernes\",\"frame\":{\"x\":269,\"y\":238,\"w\":268,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":268,\"h\":118},\"sourceSize\":{\"w\":268,\"h\":118}},{\"filename\":\"barra\",\"frame\":{\"x\":0,\"y\":0,\"w\":1404,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":1404,\"h\":118},\"sourceSize\":{\"w\":1404,\"h\":118}}]}"},"pattern":"word","activity":{"nested":true,"class":"col-md-4","styles":"margin-top: 10px;","items":[{"text":"¿En qué año se construyeron más casas?","answer":2009},{"text":"¿En qué año se construyeron menos casas?","answer":2007},{"text":"¿Cuántas casas se construyeron en 2008?","answer":4000},{"text":"¿Cuántas casas se construyeron en 2011?","answer":6000},{"text":"¿Cuántas casas de más se construyeron en 2012 con relación al 2010?","answer":2000}]}}', 2, 5, true, '2014-12-05 00:17:07.403386', '2014-12-09 17:26:18.39662', 'actividad-2-1', 12);
INSERT INTO course_data VALUES (13, 'Actividad 1. Socialización', 10, '{"footerBackground":"#FABC47","footerHeight":"284px","hasGrade":true,"images":[{"src":"luisa_perfil_arrodillada.png","alt":"Niña.","styles":"bottom: 40px; left: 0;"},{"src":"dado_azul.png","alt":"Dado de color azul.","styles":"bottom: 50px; right: 220px;"},{"src":"dado_rojo.png","alt":"Dado de color rojo.","styles":"bottom: 100px; right: 0;"}],"instructionRow":{"class":"col-md-8 pull-right"},"instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 100px;","iconInstruction":"pr-icon pr-icon-circle-arrow half","instruction":"Luisa tiene dos dados de 6 caras, uno de color azul y otro de color rojo. Ella lanza los dados al aire al mismo tiempo y espera atenta a conocer su resultado. Teniendo en cuenta la información anterior, contesta las siguientes preguntas haciendo clic sobre la respuesta correcta."},"pattern":"word","activity":{"class":"col-md-12","styles":"padding: 0;","items":[{"class":"col-md-4 col-md-offset-4","styles":"margin-top: 15px;","answer":"d","text":{"class":"col-md-12","styles":"font-weight: bold; margin-bottom: 4px;","text":"Un evento posible al lanzar los dados es:"},"objects":[{"class":"col-md-12","styles":"margin-top: 3px;","value":"a","text":"Obtener una suma igual a 1."},{"class":"col-md-12","styles":"margin-top: 3px;","value":"b","text":"Obtener dos números mayores a 6."},{"class":"col-md-12","styles":"margin-top: 3px;","value":"c","text":"Obtener números de dos dígitos."},{"class":"col-md-12","styles":"margin-top: 3px;","value":"d","text":"Obtener doble seis."}]},{"class":"col-md-4","styles":"margin-top: 15px;","answer":"b","text":{"class":"col-md-12","styles":"font-weight: bold; margin-bottom: 4px;","text":"Un evento imposible al lanzar los dados es:"},"objects":[{"class":"col-md-12","styles":"margin-top: 3px;","value":"a","text":"Obtener 1, 1."},{"class":"col-md-12","styles":"margin-top: 3px;","value":"b","text":"Obtener 8, 5."},{"class":"col-md-12","styles":"margin-top: 3px;","value":"c","text":"Obtener 6, 4."},{"class":"col-md-12","styles":"margin-top: 3px;","value":"d","text":"Obtener 5, 3."}]}]}}', 2, 5, true, '2014-12-07 14:49:15.641887', '2014-12-09 08:59:35.682086', 'actividad-3-1', 13);


--
-- Name: course_data_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('course_data_id_seq', 32, true);


--
-- Data for Name: course_registrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO course_registrations VALUES (20, 25, 2, '2015-04-23 22:17:41.480003', '2015-04-23 22:17:41.480003', 2);
INSERT INTO course_registrations VALUES (21, 24, 2, '2015-04-23 22:18:10.783057', '2015-04-23 22:18:10.783057', 3);


--
-- Name: course_registrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('course_registrations_id_seq', 21, true);


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO courses VALUES (2, 'mat04', 1, 'curso/mat/cuarto', '{"grade":"cuarto","course_module":"mat-04","resources":"cuarto/mat/","course_intro":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.Lorem ipsum dolor sit amet, consectetur.","header_img":"header-matematicas-550.png","menu_img":"matematicas_menu.png","menu_img_styles":"left: -26px;bottom: 40px;width: 230px;","course_video":"<iframe width=\"500\" height=\"300\" src=\"https://www.youtube.com/embed/vLydXu6VKZo?modestbranding=1&amp;rel=0&amp;showinfo=0\" frameborder=\"0\" ></iframe>","course_credits":[{"title":"Experto temático","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Asesoría pedagógica","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Diseño mediacional","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Diseño web","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Diseño gráfico","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Ilustración","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Año","name":2014,"icon":"pr-icon-tiny-calendar"},{"title":"Versión","name":"0.01","icon":"pr-icon-tiny-version"}]}', 1, 0, true, '2014-08-25 11:37:48.091375', '2014-10-28 14:28:34.150952');
INSERT INTO courses VALUES (5, 'mat410', 2, 'curso/mat/cuarto/10', '{"id":"mat-04-10","guide":3,"lesson_num":"2","lesson_name":"2 - Probabilidad y estadística","pdf_path":"/assets/pdf/cuarto/mat/mat410.pdf"}', 2, 0, true, '2014-10-23 12:06:13.060104', '2014-12-09 13:54:50.553603');
INSERT INTO courses VALUES (6, 'mat409', 2, 'curso/mat/cuarto/09', '{"id":"mat-04-09","guide":3,"lesson_num":"1","lesson_name":"1 - Cuadriláteros y movimientos","pdf_path":"/assets/pdf/cuarto/mat/mat409.pdf"}', 2, 0, true, '2015-02-03 09:35:01.484569', '2015-02-03 09:35:01.484569');
INSERT INTO courses VALUES (1, 'mat', 0, NULL, '{"name": "Matemáticas","icon":"common/math_icon.png"}', 0, 0, true, '2014-08-25 11:22:35.742182', '2014-08-25 11:22:35.742182');
INSERT INTO courses VALUES (9, 'mat408', 2, 'curso/mat/cuarto/08', '{"id":"mat-04-08","guide":2,"lesson_num":"3","lesson_name":"3 - Rectas, ángulos y polígonos","pdf_path":"/assets/pdf/cuarto/mat/mat408.pdf"}', 2, 0, true, '2015-05-25 10:56:01.328616', '2015-05-25 10:56:01.328616');


--
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('courses_id_seq', 9, true);


--
-- Data for Name: grades_schemes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO grades_schemes VALUES (1, 'Instancia 1', 1, '{"20.0":1.0,"22.0":1.1,"24.0":1.2,"26.0":1.3,"28.0":1.4,"30.0":1.5,"32.0":1.6,"34.0":1.7,"36.0":1.8,"38.0":1.9,"40.0":2.0,"42.0":2.1,"44.0":2.2,"46.0":2.3,"48.0":2.4,"50.0":2.5,"52.0":2.6,"54.0":2.7,"56.0":2.8,"58.0":2.9,"60.0":3.0,"62.0":3.1,"64.0":3.2,"66.0":3.3,"68.0":3.4,"70.0":3.5,"72.0":3.6,"74.0":3.7,"76.0":3.8,"78.0":3.9,"80.0":4.0,"82.0":4.1,"84.0":4.2,"86.0":4.3,"88.0":4.4,"90.0":4.5,"92.0":4.6,"94.0":4.7,"96.0":4.8,"98.0":4.9,"100.0":5.0}', true, '2015-01-15 16:41:45.89863', '2015-01-15 16:41:45.89863');
INSERT INTO grades_schemes VALUES (2, 'Instancia 2', 2, '{"22.2":1.0,"24.4":1.1,"26.7":1.2,"28.9":1.3,"31.1":1.4,"33.3":1.5,"35.6":1.6,"37.8":1.7,"40.0":1.8,"42.2":1.9,"44.4":2.0,"46.7":2.1,"48.9":2.2,"51.1":2.3,"53.3":2.4,"55.6":2.5,"57.8":2.6,"60.0":2.7,"62.2":2.8,"64.4":2.9,"66.7":3.0,"68.9":3.1,"71.1":3.2,"73.3":3.3,"75.6":3.4,"77.8":3.5,"80.0":3.6,"82.2":3.7,"84.4":3.8,"86.7":3.9,"88.9":4.0,"91.1":4.1,"93.3":4.2,"95.6":4.3,"97.8":4.4,"100.0":4.5}', true, '2015-01-15 16:41:45.929042', '2015-01-15 16:41:45.929042');
INSERT INTO grades_schemes VALUES (3, 'Instancia 3', 3, '{"25.0":1.0,"27.5":1.1,"30.0":1.2,"32.5":1.3,"35.0":1.4,"37.5":1.5,"40.0":1.6,"42.5":1.7,"45.0":1.8,"47.5":1.9,"50.0":2.0,"52.5":2.1,"55.0":2.2,"57.5":2.3,"60.0":2.4,"62.5":2.5,"65.0":2.6,"67.5":2.7,"70.0":2.8,"72.5":2.9,"75.0":3.0,"77.5":3.1,"80.0":3.2,"82.5":3.3,"85.0":3.4,"87.5":3.5,"90.0":3.6,"92.5":3.7,"95.0":3.8,"97.5":3.9,"100.0":4.0}', true, '2015-01-15 16:41:45.936785', '2015-01-15 16:41:45.936785');
INSERT INTO grades_schemes VALUES (4, 'Instancia 4', 4, '{"28.6":1.0,"31.4":1.1,"34.3":1.2,"37.1":1.3,"40.0":1.4,"42.9":1.5,"45.7":1.6,"48.6":1.7,"51.4":1.8,"54.3":1.9,"57.1":2.0,"60.0":2.1,"62.9":2.2,"65.7":2.3,"68.6":2.4,"71.4":2.5,"74.3":2.6,"77.1":2.7,"80.0":2.8,"82.9":2.9,"85.7":3.0,"88.6":3.1,"91.4":3.2,"94.3":3.3,"97.1":3.4,"100.0":3.5}', true, '2015-01-15 16:41:45.947506', '2015-01-15 16:41:45.947506');
INSERT INTO grades_schemes VALUES (5, 'Instancia 5', 5, '{"33.3":1.0,"36.7":1.1,"40.0":1.2,"43.3":1.3,"46.7":1.4,"50.0":1.5,"53.3":1.6,"56.7":1.7,"60.0":1.8,"63.3":1.9,"66.7":2.0,"70.0":2.1,"73.3":2.2,"76.7":2.3,"80.0":2.4,"83.3":2.5,"86.7":2.6,"90.0":2.7,"93.3":2.8,"96.7":2.9,"100.0":3.0}', true, '2015-01-15 16:41:45.963523', '2015-01-15 16:41:45.963523');


--
-- Name: grades_schemes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('grades_schemes_id_seq', 5, true);


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO schema_migrations VALUES ('20140819223039');
INSERT INTO schema_migrations VALUES ('20140825151315');
INSERT INTO schema_migrations VALUES ('20140825152819');
INSERT INTO schema_migrations VALUES ('20140908151034');
INSERT INTO schema_migrations VALUES ('20150107105512');
INSERT INTO schema_migrations VALUES ('20150317153848');
INSERT INTO schema_migrations VALUES ('20150317164322');
INSERT INTO schema_migrations VALUES ('20150317214619');
INSERT INTO schema_migrations VALUES ('20150318152727');
INSERT INTO schema_migrations VALUES ('20150415165018');
INSERT INTO schema_migrations VALUES ('20150415200647');


--
-- Data for Name: templates; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO templates VALUES (2, 'Introduction', 'lesson-intro', 'Esta es la directiva que incluye el template para la introduccion de las lecciones', 0, true, '2014-09-30 17:16:50.989712', '2014-09-30 17:16:50.989712');
INSERT INTO templates VALUES (4, 'Images Info Popover', 'images-info-popover', 'Directive que lista una serie de imagenes que al darle clic aparece un cuadro de información.', 1, true, '2014-10-29 16:28:03.530421', '2014-10-29 16:28:03.530421');
INSERT INTO templates VALUES (5, 'Form table', 'table-form', 'Esta plantilla incluye una tabla que contiene un formulario, también posee un contendor para conceptos de la lección y su instrucción-', 1, true, '2014-11-10 09:59:36.929535', '2014-11-10 15:22:07.100074');
INSERT INTO templates VALUES (6, 'Text Inputs Form', 'text-input-form', 'Esta directiva incluye una instrucción y un contenedor con una lista de texto y respuesta.', 1, true, '2014-11-12 11:39:43.516941', '2014-11-12 11:39:43.516941');
INSERT INTO templates VALUES (7, 'Graphic and Table', 'graphic-table', 'Esta plantilla incluye opción de instrucción y contenido, además de una tabla de datos para la gráfica animada. También incluye un cuadro de texto extra para anidar información adicional a la gráfica.', 1, true, '2014-11-19 09:26:15.736321', '2014-11-19 09:26:15.736321');
INSERT INTO templates VALUES (8, 'Drag and Drop', 'drag-drop', 'Esta plantilla posee una funcionalidad de arrastre. Dependiendo de los datos que se le asignen sería arrastre de texto o imágenes. Su principal uso será para actividades.', 2, true, '2014-11-27 16:09:24.403871', '2014-11-27 16:16:54.616893');
INSERT INTO templates VALUES (9, 'Text input and Canvas', 'input-canvas', 'Esta plantilla contiene dos objetos principales además de la instrucción; un bloque de formulario y un bloque con un canvas para agregar cualquier tipo de ', 2, true, '2014-12-04 09:30:07.56569', '2014-12-04 09:30:07.56569');
INSERT INTO templates VALUES (10, 'Formulario de selección de elementos', 'item-selection-form', 'Esta plantilla presenta la opción de generar un formulario con varias preguntas de selección múltiple con única o múltiple respuesta. Se agregará el plus de contenido interactivo audiovisual.', 2, true, '2014-12-07 14:46:23.414847', '2014-12-07 15:07:18.233408');
INSERT INTO templates VALUES (11, 'Plantilla de actividad de evidencias', 'evidence-activity', 'Esta plantilla contiene dos cajas una para descargar el archivo que contiene la actividad que el estudiante debe desarrollar y otra para enviar el archivo ya desarrollado al profesor(a).', 2, true, '2015-01-29 09:21:28.974816', '2015-01-29 09:21:28.974816');
INSERT INTO templates VALUES (12, 'Animación con elementos', 'animation-content-items', 'Plantilla que tiene un contenedor grande que muestra una animación y junto a este, varios contenedores con imagen o texto.', 1, true, '2015-02-03 11:12:32.241159', '2015-02-03 11:12:32.241159');
INSERT INTO templates VALUES (13, 'Slide de contenedores con header interactivo', 'containers-clickable-header', 'Plantilla que tiene instrucción y un slide que pinta varios contenedores en fila, el header de estos contenedores al darles click muestra la información del contenedor.', 1, true, '2015-02-05 14:10:29.729653', '2015-02-05 14:10:29.729653');
INSERT INTO templates VALUES (14, 'Contenido por tabs', 'content-tabs', 'Plantilla que contiene una instrucción y contenido paralelo a un contenedor, que posee el contenido dividido en tabs. Los tabs muestran en el hover un tooltip con un pequeño texto o imagen si se requiere.', 1, true, '2015-02-11 16:35:56.093917', '2015-02-11 16:35:56.093917');
INSERT INTO templates VALUES (15, 'Doble contenedor con slide de un contenedor', 'animations-slide', 'Esta plantilla posee dos contenedores uno des instrucción y otro de contenido. El contenedor de contenido puede tener una imagen. La funcionalidad principal de esta es un slide que tiene un contenedor el cual puede incluir una animación o imagen por cada item del slide, texto superior e inferior.', 1, true, '2015-02-17 15:35:57.25105', '2015-02-17 15:35:57.25105');
INSERT INTO templates VALUES (17, 'Emparejar por lineas, texto e imágenes', 'pair-lines', 'Esta actividad incluye contenedor para instrucción y contenido opcional. Tiene un contenedor principal que incluye la actividad donde se tienen dos listas de imagenes o textos y se emparejan los de una lista con la otra.', 2, true, '2015-03-04 16:56:03.973322', '2015-03-04 16:56:03.973322');
INSERT INTO templates VALUES (18, 'Crusigrama', 'crossword', 'Esta actividad es contiene como principal un crusigrama y los textos o imágenes que lo acompañan, también tiene una instrucción y/o contenido opcional.', 2, true, '2015-03-09 14:48:23.890556', '2015-03-09 14:48:23.890556');


--
-- Name: templates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('templates_id_seq', 18, true);


--
-- Data for Name: user_progresses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO user_progresses VALUES (891, 'mat_04_00', NULL, '21', 4, NULL, 1, 890, NULL, NULL, '2015-05-25 16:22:39.022653', '2015-05-25 16:22:39.022653');
INSERT INTO user_progresses VALUES (892, 'mat_04_01', NULL, '21', 4, NULL, 1, 890, NULL, NULL, '2015-05-25 16:22:39.033762', '2015-05-25 16:22:39.033762');
INSERT INTO user_progresses VALUES (893, 'mat_04_02', NULL, '21', 4, NULL, 1, 890, NULL, NULL, '2015-05-25 16:22:39.053134', '2015-05-25 16:22:39.053134');
INSERT INTO user_progresses VALUES (894, 'mat_04_03', NULL, '21', 4, NULL, 1, 890, NULL, NULL, '2015-05-25 16:22:39.068493', '2015-05-25 16:22:39.068493');
INSERT INTO user_progresses VALUES (897, 'mat_04_03_02', NULL, '21', 4, NULL, 2, 894, true, false, '2015-05-25 16:22:39.118893', '2015-05-25 16:22:39.118893');
INSERT INTO user_progresses VALUES (898, 'mat408_intro', NULL, '21', 4, 'null', 3, 895, true, true, '2015-05-25 16:23:17.818132', '2015-05-25 16:23:17.818132');
INSERT INTO user_progresses VALUES (900, 'mat409_tema-1-1', NULL, '21', 4, '{"done":true}', 3, 896, true, false, '2015-05-25 16:27:46.617021', '2015-05-25 16:28:52.195662');
INSERT INTO user_progresses VALUES (904, 'mat409_tema-3-1', NULL, '21', 4, '{"done":false}', 3, 896, false, false, '2015-05-25 16:27:46.872221', '2015-05-25 16:27:46.872221');
INSERT INTO user_progresses VALUES (905, 'mat409_tema-4-1', NULL, '21', 4, '{"done":false}', 3, 896, false, false, '2015-05-25 16:27:46.923195', '2015-05-25 16:27:46.923195');
INSERT INTO user_progresses VALUES (906, 'mat409_tema-5-1', NULL, '21', 4, '{"done":false}', 3, 896, false, false, '2015-05-25 16:27:46.980102', '2015-05-25 16:27:46.980102');
INSERT INTO user_progresses VALUES (907, 'mat409_tema-6-1', NULL, '21', 4, '{"done":false}', 3, 896, false, false, '2015-05-25 16:27:47.019068', '2015-05-25 16:27:47.019068');
INSERT INTO user_progresses VALUES (908, 'mat409_actividad-1-1', NULL, '21', 4, '{"done":false,"stage":1}', 4, 896, false, false, '2015-05-25 16:27:47.064388', '2015-05-25 16:27:47.064388');
INSERT INTO user_progresses VALUES (909, 'mat409_actividad-1-2', NULL, '21', 4, '{"done":false,"stage":1}', 4, 896, false, false, '2015-05-25 16:27:47.162475', '2015-05-25 16:27:47.162475');
INSERT INTO user_progresses VALUES (910, 'mat409_actividad-2-1', NULL, '21', 4, '{"done":false,"stage":1}', 4, 896, false, false, '2015-05-25 16:27:47.251137', '2015-05-25 16:27:47.251137');
INSERT INTO user_progresses VALUES (911, 'mat409_actividad-2-2', NULL, '21', 4, '{"done":false,"stage":1}', 4, 896, false, false, '2015-05-25 16:27:47.364893', '2015-05-25 16:27:47.364893');
INSERT INTO user_progresses VALUES (912, 'mat409_actividad-3-1', NULL, '21', 4, '{"done":false,"stage":1}', 4, 896, false, false, '2015-05-25 16:27:47.400715', '2015-05-25 16:27:47.400715');
INSERT INTO user_progresses VALUES (913, 'mat409_evidencia', NULL, '21', 4, '{"done":false,"stage":1}', 4, 896, false, false, '2015-05-25 16:27:47.584551', '2015-05-25 16:27:47.584551');
INSERT INTO user_progresses VALUES (899, 'mat409_intro', NULL, '21', 4, 'null', 3, 896, true, false, '2015-05-25 16:27:46.574766', '2015-05-25 16:29:02.688773');
INSERT INTO user_progresses VALUES (902, 'mat409_tema-1-3', NULL, '21', 4, '{"done":true}', 3, 896, true, false, '2015-05-25 16:27:46.727915', '2015-05-25 16:38:30.88959');
INSERT INTO user_progresses VALUES (903, 'mat409_tema-2-1', NULL, '21', 4, '{"done":false}', 3, 896, true, true, '2015-05-25 16:27:46.785177', '2015-05-25 16:38:30.947182');
INSERT INTO user_progresses VALUES (895, 'mat_04_02_03', NULL, '21', 4, NULL, 2, 893, true, true, '2015-05-25 16:22:39.086233', '2015-05-25 21:16:48.016197');
INSERT INTO user_progresses VALUES (896, 'mat_04_03_01', NULL, '21', 4, NULL, 2, 894, true, false, '2015-05-25 16:22:39.103236', '2015-05-25 21:16:48.78693');
INSERT INTO user_progresses VALUES (914, 'mat408_tema-1-1', NULL, '21', 4, '{"done":false}', 3, 895, true, false, '2015-05-25 21:55:14.39066', '2015-05-25 21:55:14.39066');
INSERT INTO user_progresses VALUES (901, 'mat409_tema-1-2', NULL, '21', 4, '{"done":true}', 3, 896, true, false, '2015-05-25 16:27:46.674529', '2015-05-25 16:36:33.097657');
INSERT INTO user_progresses VALUES (890, 'mat_04', NULL, '21', 4, '{"click_here":true,"click_here_menu":true,"progress":[null,null,{"3":{"id":9,"link":"curso/mat/cuarto/08","enabled":true,"current":true}},{"1":{"id":6,"link":"curso/mat/cuarto/09","enabled":true,"current":false},"2":{"id":5,"link":"curso/mat/cuarto/10","enabled":true,"current":false}}],"lesson_progress":{"mat408":{"intro":{"id":898,"name":"Introducción","display_name":"intro","url":"curso/mat/cuarto/08/intro","type":0,"enabled":true,"current":true},"tema-1-1":{"id":914,"name":"Tema 1","display_name":"tema-1-1","url":"curso/mat/cuarto/08/tema-1-1","type":1,"enabled":true,"current":false,"done":false}},"mat409":{"intro":{"id":899,"name":"Introducción","display_name":"intro","url":"curso/mat/cuarto/09/intro","type":0,"enabled":true,"current":false},"tema-1-1":{"id":900,"name":"Tema 1","display_name":"tema-1-1","url":"curso/mat/cuarto/09/tema-1-1","type":1,"enabled":true,"current":false,"done":true},"tema-1-2":{"id":901,"name":"Tema 1","display_name":"tema-1-2","url":"curso/mat/cuarto/09/tema-1-2","type":1,"enabled":true,"current":false,"done":true},"tema-1-3":{"id":902,"name":"Tema 1","display_name":"tema-1-3","url":"curso/mat/cuarto/09/tema-1-3","type":1,"enabled":true,"current":false,"done":true},"tema-2-1":{"id":903,"name":"Tema 2","display_name":"tema-2-1","url":"curso/mat/cuarto/09/tema-2-1","type":1,"enabled":true,"current":true,"done":false},"tema-3-1":{"id":904,"name":"Tema 3","display_name":"tema-3-1","url":"curso/mat/cuarto/09/tema-3-1","type":1,"enabled":false,"current":false,"done":false},"tema-4-1":{"id":905,"name":"Tema 4","display_name":"tema-4-1","url":"curso/mat/cuarto/09/tema-4-1","type":1,"enabled":false,"current":false,"done":false},"tema-5-1":{"id":906,"name":"Tema 5","display_name":"tema-5-1","url":"curso/mat/cuarto/09/tema-5-1","type":1,"enabled":false,"current":false,"done":false},"tema-6-1":{"id":907,"name":"Tema 6","display_name":"tema-6-1","url":"curso/mat/cuarto/09/tema-6-1","type":1,"enabled":false,"current":false,"done":false},"actividad-1-1":{"id":908,"name":"Actividad 1. Conceptualización","display_name":"actividad-1-1","url":"curso/mat/cuarto/09/actividad-1-1","type":2,"enabled":false,"current":false,"done":false,"stage":1},"actividad-1-2":{"id":909,"name":"Actividad 2. Conceptualización","display_name":"actividad-1-2","url":"curso/mat/cuarto/09/actividad-1-2","type":2,"enabled":false,"current":false,"done":false,"stage":1},"actividad-2-1":{"id":910,"name":"Actividad 1. Dinamización","display_name":"actividad-2-1","url":"curso/mat/cuarto/09/actividad-2-1","type":2,"enabled":false,"current":false,"done":false,"stage":1},"actividad-2-2":{"id":911,"name":"Actividad 2. Dinamización","display_name":"actividad-2-2","url":"curso/mat/cuarto/09/actividad-2-2","type":2,"enabled":false,"current":false,"done":false,"stage":1},"actividad-3-1":{"id":912,"name":"Actividad 1. Socialización","display_name":"actividad-3-1","url":"curso/mat/cuarto/09/actividad-3-1","type":2,"enabled":false,"current":false,"done":false,"stage":1},"evidencia":{"id":913,"name":"Actividades de evidencia","display_name":"evidencia","url":"curso/mat/cuarto/09/evidencia","type":2,"enabled":false,"current":false,"done":false,"stage":1}}}}', 0, 0, NULL, NULL, '2015-05-25 16:22:38.982265', '2015-05-25 21:55:14.46991');


--
-- Name: user_progresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('user_progresses_id_seq', 914, true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO users VALUES (21, 'mjquintero', 'Mateo', 'De jesus', 'Quintero Jimenez', 1152691750, 'M', 'mjquintero@ucn.edu.co', '', '3147509100', 0, true, '2015-04-15 15:23:59.98977', '2015-04-15 15:23:59.98977', NULL, '$2a$10$UaZ1m8BqXThmomFCrFenqO7V7N4Ka1433oOXjAP/Z91ePaj6qjKjC', 'mjquintero_profile_image.jpg', 'a986deacedb3d185f634a07ae901ffe09f96231e');
INSERT INTO users VALUES (25, 'svillegas', 'Sebastian', '', 'Villegas Usuga', 49092884, 'M', 'svillegas@ucn.edu.co', '', '3189092849', 2, true, '2015-04-20 22:19:48.843309', '2015-04-23 22:17:41.729622', '{"courses":{"cuarto":["mat"]}}', '$2a$10$Nf1Cup0vT1mP9AsfrQFXXue8XfOsWSYyHbLMNYrkFRP24aio08tVC', NULL, '78d60a1138138fec61c99379fa018710cc906634');
INSERT INTO users VALUES (24, 'amrios', 'Ana', 'Maria', 'Rios Montoya', 209123403, 'F', 'amrios@ucn.edu.co', '4019248', '', 3, true, '2015-04-15 16:24:52.444536', '2015-04-23 22:18:10.803627', '{"grade":"cuarto","courses":["mat"]}', '$2a$10$ml5wyyjjd/3Kjl12QD2Nn.pd//VuEJxtu0PATfgSTAu8Plvu1N68y', 'amrios_profile_image.jpg', '92feb5d8bc2333d77b1bf5f92ac82dbe9d29c8d2');
INSERT INTO users VALUES (26, 'nherreram', 'Nestor', 'Raul', 'Herrera Marin', 1037577361, 'M', 'nrherreramucn@ucn.edu.co', '22222', '', 1, true, '2015-04-23 22:36:19.612311', '2015-04-23 22:36:19.612311', NULL, '$2a$10$f8HIRby8/HvB9MhNdub6o.G96xLRlKDw4Ge.b0pX173wlO4mQU9jG', NULL, 'f4761a40d7e1b4bd965bcd8283f84c04af0d4862');
INSERT INTO users VALUES (27, 'jgavilac', 'Jose', 'Gregorio', 'Avila', 1037607498, 'M', 'jgavilac@ucn.edu.co', '', '', 0, true, '2015-05-25 16:57:02.087652', '2015-05-25 16:57:02.087652', NULL, '$2a$10$/hU6.9wgBH3xyxHoElz.F.eL1zNLDh5NYEQBCgCHRlxR5S3eKNsgC', NULL, 'f63e0af01aea0ff4d28122977da821010b68808d');


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('users_id_seq', 27, true);


--
-- Name: course_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY course_data
    ADD CONSTRAINT course_data_pkey PRIMARY KEY (id);


--
-- Name: course_registrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY course_registrations
    ADD CONSTRAINT course_registrations_pkey PRIMARY KEY (id);


--
-- Name: courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- Name: grades_schemes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY grades_schemes
    ADD CONSTRAINT grades_schemes_pkey PRIMARY KEY (id);


--
-- Name: templates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY templates
    ADD CONSTRAINT templates_pkey PRIMARY KEY (id);


--
-- Name: user_progresses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY user_progresses
    ADD CONSTRAINT user_progresses_pkey PRIMARY KEY (id);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: index_course_registrations_on_course_id; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX index_course_registrations_on_course_id ON course_registrations USING btree (course_id);


--
-- Name: index_course_registrations_on_user_id; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX index_course_registrations_on_user_id ON course_registrations USING btree (user_id);


--
-- Name: index_users_on_username; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE UNIQUE INDEX index_users_on_username ON users USING btree (username);


--
-- Name: unique_schema_migrations; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE UNIQUE INDEX unique_schema_migrations ON schema_migrations USING btree (version);


--
-- Name: fk_rails_e647973df6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY course_registrations
    ADD CONSTRAINT fk_rails_e647973df6 FOREIGN KEY (user_id) REFERENCES users(id);


--
-- Name: fk_rails_fc7a68a92b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY course_registrations
    ADD CONSTRAINT fk_rails_fc7a68a92b FOREIGN KEY (course_id) REFERENCES courses(id);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

