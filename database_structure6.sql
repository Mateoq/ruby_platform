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

DROP INDEX public.unique_schema_migrations;
ALTER TABLE ONLY public.user_progresses DROP CONSTRAINT user_progresses_pkey;
ALTER TABLE ONLY public.templates DROP CONSTRAINT templates_pkey;
ALTER TABLE ONLY public.grades_schemes DROP CONSTRAINT grades_schemes_pkey;
ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_pkey;
ALTER TABLE ONLY public.course_data DROP CONSTRAINT course_data_pkey;
ALTER TABLE public.user_progresses ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.templates ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.grades_schemes ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.courses ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.course_data ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE public.user_progresses_id_seq;
DROP TABLE public.user_progresses;
DROP SEQUENCE public.templates_id_seq;
DROP TABLE public.templates;
DROP TABLE public.schema_migrations;
DROP SEQUENCE public.grades_schemes_id_seq;
DROP TABLE public.grades_schemes;
DROP SEQUENCE public.courses_id_seq;
DROP TABLE public.courses;
DROP SEQUENCE public.course_data_id_seq;
DROP TABLE public.course_data;
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
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY course_data ALTER COLUMN id SET DEFAULT nextval('course_data_id_seq'::regclass);


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
-- Data for Name: course_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO course_data VALUES (2, 'Tema 1', 4, '{"lessonTitle":"Sucesos seguros, posibles e imposibles","footerBackground":"#6d5143","footerHeight":"212px","audio":{"start":32,"end":49.44462585034013},"images":[{"src":"circo1.png","styles":"bottom: 0; left: 0;"},{"src":"circo2.png","styles":"bottom: 124px; right: 0;"},{"src":"andres_lat_izq.png","styles":"bottom: 74px; right: 48px;"}],"instruction":{"hasContent":false,"hasInstruction":true,"styles":"float: none; margin: 0 auto; height: 112px; width: 552px;","instructionStyles":"width: 552px; height: 112px; font-size: 12px;","instructionBg":"blue-green-background","instruction":"Andrés tomará un globo de cada grupo sin mirar su color. ¿Será azul?<br>Haz clic sobre cada grupo de globos para conocer el tipo de suceso."},"itemsImagesClass":"col-md-4","itemsImage":[{"image":"globos_azul.png","stylesImage":"float: right;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso seguro</span> porque ocurre siempre."},{"image":"globos_azul_amarillo.png","styles":"text-align: center;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso posible</span> porque puede ocurrir o no."},{"image":"globos_amarillo.png","stylesImage":"float: left;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso imposible</span> porque nunca ocurre."}]}', 1, 5, true, '2014-10-29 16:31:00.793295', '2014-12-10 16:07:29.637883', 'tema-1-1', 2);
INSERT INTO course_data VALUES (1, 'Introducción', 2, '{"intro": "La <b>probabilidad</b> mide las posibilidades de cada uno de los resultados de un suceso o evento.<br /><br />La <b>estadística</b> es una herramienta que se utiliza para organizar información y encontrar conclusiones.<br /><br />En esta lección conocerás:<br /><br />- Cómo identificar eventos probables, cómo organizar e interpretar  información en tablas y gráficas, qué representa la media y cómo se calcula.", "standard":"\<ul\>\<li\>Conjeturo y pongo a prueba predicciones acerca de la posibilidad de ocurrencia de eventos.\</li\>\<li\>Represento datos usando tablas y gráficas (pictogramas, gráficas de barras, diagramas de líneas, diagramas circulares).\</li\>\<li\>Interpreto información presentada en tablas y gráficas (pictogramas, gráficas de barras, diagramas de líneas, diagramas circulares).\</li\>\</ul\>", "element":"\<ul\>\<li\>Evaluar la posibilidad de ocurrencia de eventos.\</li\>\<li\>Representar datos usando tablas y gráficas.\</li\>\<li\>Interpretar los datos presentados en tablas y gráficas.\</li\>\</ul\>"}', 0, 5, true, '2014-09-30 17:21:39.536721', '2014-10-27 14:58:20.779577', 'intro', 1);
INSERT INTO course_data VALUES (3, 'Tema 1', 4, '{"lessonTitle":"Más probable, menos probable","footerBackground":"#6d5143","footerHeight":"250px","audio":{"start":76,"end":98.42274376417234},"images":[{"src":"canasta_bolas.png","styles":"bottom: 80px; left: 30px;"}],"instruction":{"hasContent":true,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 405px; float: right; margin-right: 200px;","contentStyles":"100%","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px;","instructionStyles":"width: 100%; height: 100px;","contentMainStyles":"height: 62px; font-size:12px;","title":"Más probable, menos probable","text":"En la canasta hay tres pelotas verdes y seis pelotas naranjas y Luis va a sacar una sin mirar. ¿De qué color es la pelota? <b>Analicemos</b>","instruction":"Haz clic sobre cada una de las pelotas, ubicadas en la parte inferior, para conocer el tipo de probabilidad.","contentIcon":"pr-icon-notebook"},"stylesImagesInfo":"bottom: 48px;","itemsImagesClass":"col-md-12","itemsImage":[{"image":"pelota_verde.png","styles":"height: 120px;","stylesImage":"position: absolute; right: 500px;","stylesPopover":"left: 220px; width: 468px; height: 47px; bottom: 26px; padding: 4px; padding-left: 82px;","stylesPopoverTitle":"position: absolute; left: 0; width: 80px; height: 100%; top: 0; padding: 13px; font-size: 16px; font-weight: 100; color: #FFF; background-color: #3AA835;","contentTitle":"Verde","content":"En la canasta hay menos pelotas verdes que naranjas, por lo tanto es <b>menos probable</b> sacar una pelota verde que una pelota naranja."},{"image":"pelota_naranja.png","styles":"height: 120px;","stylesImage":"position: absolute; right: 525px;","stylesPopover":"left: 244px; width: 468px; height: 47px; bottom: 51px; padding: 4px; padding-left: 82px;","stylesPopoverTitle":"position: absolute; left: 0; width: 80px; height: 100%; top: 0; padding: 13px; font-size: 16px; font-weight: 100; color: #FFF; background-color: #ED7D32;","contentTitle":"Naranja","content":"En la canasta hay más pelotas naranjas que verdes, por lo tanto es <b>más probable</b> sacar una pelota naranja que una pelota verde."}]}', 1, 5, true, '2014-11-07 09:57:27.884471', '2014-12-10 16:32:07.741024', 'tema-1-2', 3);
INSERT INTO course_data VALUES (4, 'Tema 2', 5, '{"lessonTitle":"Organizando datos","footerBackground":"#4D869F","footerHeight":"214px","images":[{"src":"puesto_frutas.png","styles":"left: 0; bottom: 10px;"},{"src":"pesa_y_frutas.png","styles":"right: 70px; bottom: 80px;"}],"stylesCont":"padding-left: 170px;","stylesTableCont":"padding-right: 170px;","content":{"hasContent":true,"hasInstruction":false,"title":"Organizando datos","text":"Carlos quiere organizar en las siguiente tabla las frutas que comió su familia durante  el fin de semana.<br><br><b>Sábado</b>: tres peras, dos bananos, cinco manzanas y cuatro mandarinas.<br><br><b>Domingo</b>: una pera, seis bananos, cuatro manzanas y tres mandarinas.","contentIcon":"pr-icon-notebook","contentHeaderStyles":"width: 100%;","contentTitleStyles":"font-size: 20px;","contentMainStyles":"width: 100%;"},"instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","instructionStyles":"height: 102px;","instruction":"Ayuda a Carlos escribiendo la información en la tabla."},"pattern":"num","table":{"titles":[{"title":"Fruta","secondTitle":"Día"},{"title":"Sábado"},{"title":"Domingo"},{"title":"Total"}],"items":[[{"text":"Manzana"},{"answer":5},{"answer":4},{"answer":9}],[{"text":"Mandarina"},{"answer":4},{"answer":3},{"answer":7}],[{"text":"Banano"},{"answer":2},{"answer":6},{"answer":8}],[{"text":"Pera"},{"answer":3},{"answer":1},{"answer":4}],[{"text":"Total"},{"answer":14},{"answer":14},{"answer":28}]]}}', 1, 5, true, '2014-11-10 12:37:24.089205', '2014-11-24 11:28:28.911048', 'tema-2-1', 4);
INSERT INTO course_data VALUES (5, 'Tema 2', 6, '{"lessonTitle":"Interpretando datos","footerBackground":"#4D869F","footerHeight":"214px","images":[{"src":"puesto_frutas.png","styles":"left: 0; bottom: 10px;"},{"src":"carlos_frente.png","styles":"right: 90px; bottom: 30px;"}],"pattern":"word","stylesInstructionRow":"height: 102px;","stylesInstructionContainer":"float: none; margin: auto; height: 100%; left: 100px;","instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","instructionStyles":"height: 102px; width: 100%;","instruction":"De acuerdo a la tabla anterior, ayuda a Carlos a contestar las siguientes preguntas escribiendo en los espacios correspondientes."},"stylesActionRow":"height: 302px;","stylesActionCol":"width: 429px; float: none; margin: auto; height: 100%; left: 160px;","items":[{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuántas frutas se comieron el sábado?</b>","answer":"14"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuál fue la fruta que más comió su familia durante el fin de semana?</b>","answer":"Manzana"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuántas frutas se comieron en los dos días?</b>","answer":"28"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuál fruta comió menos su familia durante el fin de semana?</b>","answer":"Pera"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuántos bananos se comieron el día sábado?</b>","answer":"2"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Qué representa el número 7 en la tabla? <span class=\"text-right\">Total de:</span></b>","answer":"Mandarinas"}],"slideScreenOn":true,"stylesScreenContent":"display: table; height: 80%; width: 100%; margin: auto;","stylesScreenImage":"width: 373px; display: table-cell; vertical-align: middle; margin: auto; padding: 0; float: none;","slideScreenTitle":"Tabla informativa","slideScreenImage":"tabla_frutas.png","slideScreenAlt":"Tabla con informacón del tema 2-1"}', 1, 5, true, '2014-11-12 11:40:57.285378', '2014-11-19 17:34:27.376858', 'tema-2-2', 5);
INSERT INTO course_data VALUES (12, 'Actividad 1. Dinamización', 9, '{"footerBackground":"#4F643A","footerHeight":"286px","hasGrade":true,"images":[{"src":"casa.png","alt":"Casa pequeña con techo rojo, una puerta y una ventana.","styles":"bottom: 190px; left: 85px;"},{"src":"asfalto.png","styles":"bottom: 0; left: 0; z-index: -4;"}],"instructionRow":{"class":"col-md-8 pull-right"},"instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 100px;","instruction":"Observa el siguiente pictograma y contesta las preguntas escribiendo sobre cada línea.  Ten en cuenta que cada <span class=\"pr-icon pr-icon-tiny-house\" style=\"margin: 0 2px -6px 2px;\"></span> representa 1.000 casas."},"canvasRow":{"class":"col-md-4 col-md-offset-4","styles":"margin-top: 10px;"},"activityName":"house_count","method":1,"canvasData":{"width":1421,"height":1211,"maxWidth":350,"maxHeight":280,"atlasMap":"houses_sheet.png","positions":[{"y":0,"dia":"lunes"},{"y":186,"dia":"martes"},{"y":363,"dia":"miercoles"},{"y":545,"dia":"jueves"},{"y":721,"dia":"viernes"},{"y":911,"dia":"sabado"},{"y":1094,"dia":"domingo"}],"positions2":[{"x":300},{"x":436},{"x":572},{"x":703},{"x":843},{"x":975},{"x":1113},{"x":1246}],"itemsPositions":[{"first":10,"times":2},{"first":194,"times":4},{"first":376,"times":8},{"first":556,"times":3},{"first":740,"times":6},{"first":921,"times":5},{"first":1105,"times":7}],"atlasJson":"{\"frames\":[{\"filename\":\"domingo\",\"frame\":{\"x\":0,\"y\":119,\"w\":268,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":268,\"h\":118},\"sourceSize\":{\"w\":268,\"h\":118}},{\"filename\":\"jueves\",\"frame\":{\"x\":269,\"y\":119,\"w\":268,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":268,\"h\":118},\"sourceSize\":{\"w\":268,\"h\":118}},{\"filename\":\"lunes\",\"frame\":{\"x\":538,\"y\":119,\"w\":268,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":268,\"h\":118},\"sourceSize\":{\"w\":268,\"h\":118}},{\"filename\":\"martes\",\"frame\":{\"x\":807,\"y\":119,\"w\":268,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":268,\"h\":118},\"sourceSize\":{\"w\":268,\"h\":118}},{\"filename\":\"miercoles\",\"frame\":{\"x\":1076,\"y\":119,\"w\":268,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":268,\"h\":118},\"sourceSize\":{\"w\":268,\"h\":118}},{\"filename\":\"pre\",\"frame\":{\"x\":538,\"y\":238,\"w\":132,\"h\":99},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":132,\"h\":99},\"sourceSize\":{\"w\":132,\"h\":99}},{\"filename\":\"sabado\",\"frame\":{\"x\":0,\"y\":238,\"w\":268,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":268,\"h\":118},\"sourceSize\":{\"w\":268,\"h\":118}},{\"filename\":\"viernes\",\"frame\":{\"x\":269,\"y\":238,\"w\":268,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":268,\"h\":118},\"sourceSize\":{\"w\":268,\"h\":118}},{\"filename\":\"barra\",\"frame\":{\"x\":0,\"y\":0,\"w\":1404,\"h\":118},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":1404,\"h\":118},\"sourceSize\":{\"w\":1404,\"h\":118}}]}"},"pattern":"word","activity":{"nested":true,"class":"col-md-4","styles":"margin-top: 10px;","items":[{"text":"¿En qué año se construyeron más casas?","answer":2009},{"text":"¿En qué año se construyeron menos casas?","answer":2007},{"text":"¿Cuántas casas se construyeron en 2008?","answer":4000},{"text":"¿Cuántas casas se construyeron en 2008?","answer":6000},{"text":"¿Cuántas casas de más se construyeron en 2012 con relación al 2010?","answer":2000}]}}', 2, 5, true, '2014-12-05 00:17:07.403386', '2014-12-09 17:26:18.39662', 'actividad-2-1', 12);
INSERT INTO course_data VALUES (6, 'Tema 2', 7, '{"lessonTitle":"Gráfica de barras","footerBackground":"#4D869F","footerHeight":"213px","images":[{"src":"daniel_frente.png","styles":"bottom: 80px; left: 80px;"},{"src":"elemen_deporte.png","styles":"bottom: 56px; left: 248px;"}],"stylesInstructionRow":"margin-bottom: 10px;","stylesInstructionCol":"float: none; position: relative; margin: auto; height: 119px; left: 70px; width: 686px;","instruction":{"hasContent":true,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","contentStyles":"width: 50%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px;","instructionStyles":"width: 50%; height: 118px;","contentMainStyles":"height: 62px; font-size:12px;","title":"Gráfica de barras","text":"Daniel preguntó a sus amigos cuál es su deporte favorito y organizó la información en una gráfica.","instruction":"Haz clic sobre cada deporte para visualizar su gráfica.","contentIcon":"pr-icon-notebook"},"stylesMainContent":"width: 686px; left: 70px;","table":{"stylesContainer":"width: 170px; float: left;","titles":[{"title":"Deportes"},{"title":"Niños y niñas"}],"items":[[{"text":"Natación"},{"text":"4"}],[{"text":"Fútbol"},{"text":"7"}],[{"text":"Baloncesto"},{"text":"3"}],[{"text":"Voleibol"},{"text":"2"}],[{"text":"Ciclismo"},{"text":"3"}]]},"stylesGraphicContainer":"width: 450px; float: right;","method":0,"graphicData":{"width":450,"height":320,"atlasMap":"deporte_favorito_tabla.png","media":false,"buttons":[{"x":110,"y":285,"btn":"natacion"},{"x":174,"y":285,"btn":"futbol"},{"x":232,"y":285,"btn":"baloncest"},{"x":307,"y":285,"btn":"voleibol"},{"x":365,"y":285,"btn":"ciclismo"}],"bars":[{"x":142,"y":272,"name":"g1"},{"x":200,"y":272,"name":"g2"},{"x":265,"y":272,"name":"g3"},{"x":331,"y":272,"name":"g4"},{"x":395,"y":272,"name":"g5"}],"atlasJson":"{\"frames\":[{\"filename\":\"ciclismo\",\"frame\":{\"x\":137,\"y\":407,\"w\":58,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":58,\"h\":17},\"sourceSize\":{\"w\":58,\"h\":17}},{\"filename\":\"futbol\",\"frame\":{\"x\":0,\"y\":371,\"w\":52,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":52,\"h\":17},\"sourceSize\":{\"w\":52,\"h\":17}},{\"filename\":\"baloncest\",\"frame\":{\"x\":25,\"y\":389,\"w\":68,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":68,\"h\":17},\"sourceSize\":{\"w\":68,\"h\":17}},{\"filename\":\"bg\",\"frame\":{\"x\":0,\"y\":0,\"w\":506,\"h\":370},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":506,\"h\":370},\"sourceSize\":{\"w\":506,\"h\":370}},{\"filename\":\"g5\",\"frame\":{\"x\":507,\"y\":273,\"w\":24,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":74},\"sourceSize\":{\"w\":24,\"h\":74}},{\"filename\":\"g1\",\"frame\":{\"x\":507,\"y\":0,\"w\":24,\"h\":99},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":99},\"sourceSize\":{\"w\":24,\"h\":99}},{\"filename\":\"g2\",\"frame\":{\"x\":507,\"y\":100,\"w\":24,\"h\":172},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":172},\"sourceSize\":{\"w\":24,\"h\":172}},{\"filename\":\"g3\",\"frame\":{\"x\":507,\"y\":348,\"w\":24,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":74},\"sourceSize\":{\"w\":24,\"h\":74}},{\"filename\":\"g4\",\"frame\":{\"x\":0,\"y\":389,\"w\":24,\"h\":49},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":49},\"sourceSize\":{\"w\":24,\"h\":49}},{\"filename\":\"voleibol\",\"frame\":{\"x\":25,\"y\":407,\"w\":52,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":52,\"h\":17},\"sourceSize\":{\"w\":52,\"h\":17}},{\"filename\":\"natacion\",\"frame\":{\"x\":78,\"y\":407,\"w\":58,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":58,\"h\":17},\"sourceSize\":{\"w\":58,\"h\":17}}]}"}}', 1, 5, true, '2014-11-19 09:40:29.86523', '2014-12-09 03:11:49.441439', 'tema-2-3', 6);
INSERT INTO course_data VALUES (16, 'Tema 1', 12, '{"lessonTitle":"Cuadriláteros","footerBackground":"#607944","footerHeight":"244px","animationContent":{"hasContent":true,"styles":"width: 100%;","contentMainClass":"animation-content","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 24px; height: 47px;","stylesContentIcon":"height: 47px;","contentMainStyles":"font-size: 14px; width: 100%; padding-top: 12px;","title":"Cuadriláteros","text":"Son polígonos de cuatro lados, por lo tanto tienen cuatro vértices y a su vez cuatro ángulos.","contentIcon":"pr-icon-notebook","image":"tema1_cuadrilatero1.gif","bottomText":"Algunos ejemplos de cuadriláteros son:"},"itemsClass":"col-md-5","items":[[{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 109px; padding-top: 0;","title":"Rectángulo","contentIcon":"pr-icon-picture","image":"tema1_rectangulo.png"},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 109px; padding-top: 0;","title":"Cuadrado","contentIcon":"pr-icon-picture","image":"tema1_cuadrado.png"}],[{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 109px; padding-top: 0;","title":"Rombo","contentIcon":"pr-icon-picture","image":"tema1_rombo.png"},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 109px; padding-top: 0;","title":"Romboide","contentIcon":"pr-icon-picture","image":"tema1_romboide.png"}],[{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 109px; padding-top: 0;","title":"Trapecio","contentIcon":"pr-icon-picture","image":"tema1_trapecio.png"},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 109px; padding-top: 0;","title":"Trapezoide","contentIcon":"pr-icon-picture","image":"tema1_trapezoide.png"}]]}', 1, 6, true, '2015-02-03 11:29:02.010954', '2015-02-03 11:29:02.010954', 'tema-1-1', 2);
INSERT INTO course_data VALUES (7, 'Tema 2', 7, '{"lessonTitle":"Pictogramas","footerBackground":"#4D869F","footerHeight":"163px","images":[{"src":"carpa_circo.png","styles":"bottom: 100px; right: 10px;"}],"content":{"hasContent":true,"hasInstruction":false,"styles":"width: 61.965812%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px; height: 47px;","stylesContentIcon":"height: 47px;","contentMainStyles":"font-size: 12px; width: 100%; padding-top: 12px;","title":"Pictogramas","text":"En un pictograma se utiliza una figura para representar cierta cantidad de datos. En este caso, la figura <span class=\"pr-icon pr-icon-tiny-people dark\" style=\"margin-bottom: -6px;\"></span> representa 100 personas. Observa el siguiente ejemplo.","contentIcon":"pr-icon-notebook"},"stylesInstructionRow":"margin-top: 10px","stylesInstructionCol":"width: 100%; padding: 0","instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 40%; margin-left: 21.965811%;","instructionStyles":"width: 100%; height: 100px;","instruction":"Haz clic sobre cada día de la semana para visualizar el pictograma correspondiente."},"stylesMainContent":"height: auto; min-height: 40%; float: left; width: 100%;","table":{"stylesContainer":"width: 149px; float: left; margin-top: -115px;","note":{"text":"Cantidad de personas que asisten a un circo durante la semana:"},"stylesMainContent":"min-height: 40%; height: auto;","stylesItems":"padding: 0; height: 36px;","titles":[{"title":"Día"},{"title":"Personas"}],"items":[[{"text":"Lunes"},{"text":"100"}],[{"text":"Martes"},{"text":"300"}],[{"text":"Miércoles"},{"text":"200"}],[{"text":"Jueves"},{"text":"400"}],[{"text":"Viernes"},{"text":"500"}],[{"text":"Sábado"},{"text":"900"}],[{"text":"Domingo"},{"text":"700"}],[{"text":"TOTAL"},{"text":"3100"}]]},"method":1,"stylesGraphicContainer":"float: left; margin-left: 8.1578947%; width: 38.947368%;","graphicData":{"width":349,"height":220,"atlasMap":"pictograma_sheet.png","positions":[{"y":0,"dia":"lunes"},{"y":32,"dia":"martes"},{"y":64,"dia":"miercoles"},{"y":96,"dia":"jueves"},{"y":128,"dia":"viernes"},{"y":160,"dia":"sabado"},{"y":192,"dia":"domingo"}],"positions2":[{"x":113},{"x":138},{"x":164},{"x":189},{"x":215},{"x":243},{"x":269},{"x":294},{"x":320}],"itemsPositions":[{"first":2,"times":1},{"first":34,"times":3},{"first":67,"times":2},{"first":99,"times":4},{"first":131,"times":5},{"first":163,"times":9},{"first":195,"times":7}],"atlasJson":"{\"frames\":[{\"filename\":\"domingo\",\"frame\":{\"x\":0,\"y\":24,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"jueves\",\"frame\":{\"x\":108,\"y\":24,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"lunes\",\"frame\":{\"x\":216,\"y\":24,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"martes\",\"frame\":{\"x\":0,\"y\":48,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"sabado\",\"frame\":{\"x\":108,\"y\":48,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"viernes\",\"frame\":{\"x\":216,\"y\":48,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"miercoles\",\"frame\":{\"x\":0,\"y\":72,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"barra\",\"frame\":{\"x\":0,\"y\":0,\"w\":345,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":345,\"h\":23},\"sourceSize\":{\"w\":345,\"h\":23}},{\"filename\":\"pre\",\"frame\":{\"x\":108,\"y\":72,\"w\":20,\"h\":19},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":20,\"h\":19},\"sourceSize\":{\"w\":20,\"h\":19}}]}"}}', 1, 5, true, '2014-11-20 17:02:43.601155', '2014-12-02 17:59:10.043907', 'tema-2-4', 7);
INSERT INTO course_data VALUES (10, 'Actividad 2. Conceptualización', 8, '{"footerBackground":"#3DB2BC","footerHeight":"243px","hasGrade":true,"stylesInstructionRow":"float: left; height: 93px; position: absolute; margin-left: 68px; width: 58%;","instruction":{"class":"col-md-6","hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 96px;","instruction":"Arrastra cada descripción ubicándola debajo de la canasta correspondiente, de acuerdo al evento que sea <span class=\"dark-gray-text\">más probable</span> o <span class=\"dark-gray-text\">menos probable</span> que suceda."},"activityContainerStyles":"margin-top: -20px;","activityName":"basket_balls","activity":{"width":1024,"height":510,"atlasMap":"balls_baskets_sheet.png","textStyles":{"font":"Open Sans","fontSize":18,"fontWeight":500,"fill":"#FFFFFF","align":"left"},"answerStyles":{"wordWrapWidth":168,"fontSize":12,"fill":"#3f3f41"},"assetPositions":[{"x":26,"y":142.25,"name":"table_balls_baskets"},{"x":83.1818,"y":347.25,"name":"box_tablecloth","text":{"x":69.62068965517244,"y":11.689655172413794,"text":"Canasta 1"},"answer":{"x":6,"y":48.78947368421046,"answer":"Es más probable coger al azar una bola azul que una verde o roja.","value":4},"icons":{"x":95.5555,"y":350.9166}},{"x":309,"y":347.25,"name":"box_tablecloth","text":{"x":69.6206,"y":11.6896,"text":"Canasta 2"},"answer":{"x":6,"y":48.78947368421046,"answer":"Es menos probable coger al azar una bola verde que una roja.","value":2},"icons":{"x":321,"y":350.9166}},{"x":536,"y":347.25,"name":"box_tablecloth","text":{"x":69.62068965517244,"y":11.689655172413794,"text":"Canasta 3"},"answer":{"x":6,"y":48.78947368421046,"answer":"Es más probable coger al azar una bola verde que una azul.","value":1},"icons":{"x":548,"y":350.9166}},{"x":766,"y":347.25,"name":"box_tablecloth","text":{"x":69.62068965517244,"y":11.689655172413794,"text":"Canasta 4"},"answer":{"x":6,"y":48.78947368421046,"answer":"Es igual de probable coger al azar una bola verde, una bola roja o una bola azul","value":3},"icons":{"x":778.000000000001,"y":350.9166}}],"drops":[{"x":83.0769,"y":389.9423,"name":"box_drop"},{"x":308.25,"y":389.9423,"name":"box_drop"},{"x":536.5,"y":389.9423,"name":"box_drop"},{"x":765.7839,"y":389.9423,"name":"box_drop"}],"dragsData":{"x":5,"y":6,"wrap":152,"styles":{"font":"12px Open Sans","fill":"#3f3f41"}},"drags":[{"x":692,"y":2.625,"name":"box_drag","value":1,"text":{"text":"Es más probable coger al azar una bola verde que una azul."}},{"x":862,"y":2.625,"name":"box_drag","value":2,"text":{"text":"Es menos probable coger al azar una bola verde que una roja."}},{"x":692,"y":79.5,"name":"box_drag","value":3,"text":{"text":"Es igual de probable coger al azar una bola verde, una bola roja o una bola azul."}},{"x":862,"y":79.5,"name":"box_drag","value":4,"text":{"text":"Es igual de probable coger al azar una bola verde, una bola roja o una bola azul."}}],"atlasJson":"{\"frames\":[{\"filename\":\"table_balls_baskets\",\"frame\":{\"x\":0,\"y\":0,\"w\":971,\"h\":304},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":971,\"h\":304},\"sourceSize\":{\"w\":971,\"h\":304}},{\"filename\":\"box_tablecloth\",\"frame\":{\"x\":0,\"y\":305,\"w\":180,\"h\":177},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":180,\"h\":177},\"sourceSize\":{\"w\":180,\"h\":177}},{\"filename\":\"box_drop\",\"frame\":{\"x\":181,\"y\":305,\"w\":180,\"h\":108},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":180,\"h\":108},\"sourceSize\":{\"w\":180,\"h\":108}},{\"filename\":\"box_drag\",\"frame\":{\"x\":362,\"y\":305,\"w\":161,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":161,\"h\":74},\"sourceSize\":{\"w\":161,\"h\":74}},{\"filename\":\"icon_right\",\"frame\":{\"x\":181,\"y\":414,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}},{\"filename\":\"icon_wrong\",\"frame\":{\"x\":217,\"y\":414,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}},{\"filename\":\"icon_arrow\",\"frame\":{\"x\":253,\"y\":414,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}}]}"}}', 2, 5, true, '2014-12-03 09:51:37.87321', '2014-12-09 09:09:14.957647', 'actividad-1-2', 10);
INSERT INTO course_data VALUES (8, 'Tema 2', 7, '{"lessonTitle":"Media","footerBackground":"#4D869F","footerHeight":"167px","secondTemplate":true,"stylesContentRow":"padding: 0; margin-bottom: 16px;","content":{"hasContent":true,"hasInstruction":false,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px; height: 47px;","stylesContentIcon":"height: 47px;","contentMainStyles":"font-size: 12px; width: 100%; padding-top: 12px;","title":"Media","text":"<b>La media de un conjunto de datos se halla sumando los datos y dividiendo esa suma por la cantidad de datos</b>. Andrés tiene 24 globos de cuatro colores diferentes tal como lo indica la tabla. ¿Cuántos globos de cada color tendría Andrés, si tuviera la misma cantidad de globos por color?<ul class=\"list-unstyled pr-list-items\"><li class=\"pr-list-item\"><h5>Suma de datos: 8 + 6 + 3 + 7 = 24 globos</h5></li><li class=\"pr-list-item\"><h5>Cantidad de datos: 4 colores</h5></li></ul>","contentIcon":"pr-icon-notebook"},"stylesInstructionRow":"padding: 0;","instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 100px;","instruction":"Haz clic sobre la tabla de datos para observar cómo se construye la media."},"table":{"stylesContainer":"margin-bottom: 16px;","titles":[{"title":"Color"},{"title":"Azul"},{"title":"Verde"},{"title":"Amarillo"},{"title":"Rojo"}],"items":[[{"text":"Cantidad"},{"text":"8"},{"text":"6"},{"text":"3"},{"text":"7"}]]},"method":0,"graphicData":{"width":472,"height":370,"atlasMap":"media_sheet.png","media":true,"bars":[{"x":160,"y":271,"name":"b1"},{"x":225,"y":271,"name":"b2"},{"x":289,"y":271,"name":"b3"},{"x":352,"y":270,"name":"b4"}],"medias":[{"x":160,"y":73,"name":"b6"},{"x":289,"y":198,"name":"b7"},{"x":352,"y":98,"name":"b5"}],"atlasJson":"{\"frames\":[{\"filename\":\"bg\",\"frame\":{\"x\":52,\"y\":0,\"w\":472,\"h\":370},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":472,\"h\":370},\"sourceSize\":{\"w\":472,\"h\":370}},{\"filename\":\"line\",\"frame\":{\"x\":0,\"y\":374,\"w\":322,\"h\":4},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":322,\"h\":4},\"sourceSize\":{\"w\":322,\"h\":4}},{\"filename\":\"b1\",\"frame\":{\"x\":0,\"y\":175,\"w\":24,\"h\":198},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":198},\"sourceSize\":{\"w\":24,\"h\":198}},{\"filename\":\"b2\",\"frame\":{\"x\":0,\"y\":26,\"w\":24,\"h\":148},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":148},\"sourceSize\":{\"w\":24,\"h\":148}},{\"filename\":\"b3\",\"frame\":{\"x\":26,\"y\":51,\"w\":24,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":74},\"sourceSize\":{\"w\":24,\"h\":74}},{\"filename\":\"b4\",\"frame\":{\"x\":26,\"y\":201,\"w\":24,\"h\":172},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":172},\"sourceSize\":{\"w\":24,\"h\":172}},{\"filename\":\"b5\",\"frame\":{\"x\":0,\"y\":0,\"w\":25,\"h\":25},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":25,\"h\":25},\"sourceSize\":{\"w\":25,\"h\":25}},{\"filename\":\"b6\",\"frame\":{\"x\":26,\"y\":0,\"w\":25,\"h\":50},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":25,\"h\":50},\"sourceSize\":{\"w\":25,\"h\":50}},{\"filename\":\"b7\",\"frame\":{\"x\":26,\"y\":126,\"w\":24,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":74},\"sourceSize\":{\"w\":24,\"h\":74}}],\"meta\":{\"app\":\"http://www.leshylabs.com/apps/sstool/\",\"version\":\"Leshy SpriteSheet Tool v0.8.1\",\"size\":{\"w\":524,\"h\":378},\"scale\":1}}"}}', 1, 5, true, '2014-11-26 09:09:31.430011', '2014-12-05 09:55:30.808371', 'tema-2-5', 8);
INSERT INTO course_data VALUES (9, 'Actividad 1. Conceptualización', 8, '{"footerBackground":"#3DB2BC","footerHeight":"243px","hasGrade":true,"images":[{"src":"puesto_helados.png","styles":"bottom: 150px; right: 0;"},{"src":"hombre_balotas.png","alt":"Señor haciendo girar una balotera con balotas de varios colores.","styles":"bottom: 12px; right: 40px;"}],"stylesInstructionRow":"float: none; height: 93px;","instruction":{"class":"col-md-7 center-block","hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 96px;","instruction":"En la balotera hay 50 balotas marcadas del 0 al 49. Arrastra hasta el frente de cada evento las opciones <span class=\"dark-gray-text\">seguro</span>, <span class=\"dark-gray-text\">posible</span> e <span class=\"dark-gray-text\">imposible</span> según corresponda."},"activityContainerStyles":"margin-top: 5px;","activityName":"possibilities","activity":{"width":500,"height":350,"atlasMap":"possibilities_sheet.png","textStyles":{"font":"12px Open Sans","fill":"#3f3f41","fontSize":12,"align":"left"},"answerStyles":{"fontWeight":"bold","fontSize":14,"fill":"#CF0D25"},"assetPositions":[{"x":3,"y":3,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota con el número 15:"},"answer":{"x":403.1666666666667,"y":16.222222222222225,"answer":"Posible"},"icons":{"x":13,"y":6}},{"x":3,"y":51,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota con el número 60:"},"answer":{"x":395.3333333333331,"y":16.222222222222225,"answer":"Imposible"},"icons":{"x":13,"y":53}},{"x":3,"y":99,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota con un número menor a 50:"},"answer":{"x":401.83333333333326,"y":16.222222222222225,"answer":"Seguro"},"icons":{"x":13,"y":102}},{"x":3,"y":147,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota que no esté numerada:"},"answer":{"x":395.3333333333331,"y":16.222222222222225,"answer":"Imposible"},"icons":{"x":13,"y":150}},{"x":3,"y":194.81658119658107,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota con un número de un digito:"},"answer":{"x":403.1666666666667,"y":16.222222222222225,"answer":"Posible"},"icons":{"x":13,"y":197.51658119658103}},{"x":3,"y":262.77777777777777,"name":"buttons_container"}],"drops":[{"x":370,"y":3,"name":"active_bar"},{"x":370,"y":51,"name":"active_bar"},{"x":370,"y":99,"name":"active_bar"},{"x":370,"y":147,"name":"active_bar"},{"x":370,"y":194.81658119658107,"name":"active_bar"}],"dragsData":{"x":0,"y":8.846153846153852,"styles":{"font":"14px Open Sans","fontWeight":700,"fill":"#FFFFFF","align":"center"}},"drags":[{"x":83,"y":272,"name":"blue_draggable_block","value":"Seguro","text":{"text":"Seguro"}},{"x":83,"y":313,"name":"blue_draggable_block","value":"Seguro","text":{"text":"Seguro"}},{"x":192,"y":272,"name":"yellow_draggable_block","value":"Posible","text":{"text":"Posible"}},{"x":192,"y":313,"name":"yellow_draggable_block","value":"Posible","text":{"text":"Posible"}},{"x":301,"y":272,"name":"red_draggable_block","value":"Imposible","text":{"text":"Imposible"}},{"x":301,"y":313,"name":"red_draggable_block","value":"Imposible","text":{"text":"Imposible"}}],"atlasJson":"{\"frames\":[{\"filename\":\"buttons_container\",\"frame\":{\"x\":0,\"y\":0,\"w\":493,\"h\":90},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":493,\"h\":90},\"sourceSize\":{\"w\":493,\"h\":90}},{\"filename\":\"main_content_bar\",\"frame\":{\"x\":0,\"y\":91,\"w\":494,\"h\":41},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":494,\"h\":41},\"sourceSize\":{\"w\":494,\"h\":41}},{\"filename\":\"active_bar\",\"frame\":{\"x\":0,\"y\":133,\"w\":126,\"h\":41},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":126,\"h\":41},\"sourceSize\":{\"w\":126,\"h\":41}},{\"filename\":\"icon_right\",\"frame\":{\"x\":127,\"y\":133,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}},{\"filename\":\"icon_wrong\",\"frame\":{\"x\":163,\"y\":133,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}},{\"filename\":\"red_draggable_block\",\"frame\":{\"x\":235,\"y\":133,\"w\":102,\"h\":32},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":102,\"h\":32},\"sourceSize\":{\"w\":102,\"h\":32}},{\"filename\":\"blue_draggable_block\",\"frame\":{\"x\":338,\"y\":133,\"w\":102,\"h\":32},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":102,\"h\":32},\"sourceSize\":{\"w\":102,\"h\":32}},{\"filename\":\"yellow_draggable_block\",\"frame\":{\"x\":0,\"y\":175,\"w\":102,\"h\":32},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":102,\"h\":32},\"sourceSize\":{\"w\":102,\"h\":32}},{\"filename\":\"icon_arrow\",\"frame\":{\"x\":199,\"y\":133,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}}]}"}}', 2, 5, true, '2014-11-27 16:23:23.696081', '2015-01-15 16:51:49.041645', 'actividad-1-1', 9);
INSERT INTO course_data VALUES (13, 'Actividad 1. Socialización', 10, '{"footerBackground":"#FABC47","footerHeight":"284px","hasGrade":true,"images":[{"src":"luisa_perfil_arrodillada.png","alt":"Niña.","styles":"bottom: 40px; left: 0;"},{"src":"dado_azul.png","alt":"Dado de color azul.","styles":"bottom: 50px; right: 220px;"},{"src":"dado_rojo.png","alt":"Dado de color rojo.","styles":"bottom: 100px; right: 0;"}],"instructionRow":{"class":"col-md-8 pull-right"},"instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 100px;","instruction":"Luisa tiene dos dados de 6 caras, uno de color azul y otro de color rojo. Ella lanza los dados al aire al mismo tiempo y espera atenta a conocer su resultado. Teniendo en cuenta la información anterior, contesta las siguientes preguntas haciendo clic sobre la respuesta correcta."},"pattern":"word","activity":{"class":"col-md-12","styles":"padding: 0;","items":[{"class":"col-md-4 col-md-offset-4","styles":"margin-top: 15px;","answer":"d","text":{"class":"col-md-12","styles":"font-weight: bold; margin-bottom: 4px;","text":"Un evento posible al lanzar los dados es:"},"objects":[{"class":"col-md-12","styles":"margin-top: 3px;","value":"a","text":"Obtener una suma igual a 1."},{"class":"col-md-12","styles":"margin-top: 3px;","value":"b","text":"Obtener dos números mayores a 6."},{"class":"col-md-12","styles":"margin-top: 3px;","value":"c","text":"Obtener números de dos dígitos."},{"class":"col-md-12","styles":"margin-top: 3px;","value":"d","text":"Obtener doble seis."}]},{"class":"col-md-4","styles":"margin-top: 15px;","answer":"b","text":{"class":"col-md-12","styles":"font-weight: bold; margin-bottom: 4px;","text":"Un evento imposible al lanzar los dados es:"},"objects":[{"class":"col-md-12","styles":"margin-top: 3px;","value":"a","text":"Obtener 1, 1."},{"class":"col-md-12","styles":"margin-top: 3px;","value":"b","text":"Obtener 8, 5."},{"class":"col-md-12","styles":"margin-top: 3px;","value":"c","text":"Obtener 6, 4."},{"class":"col-md-12","styles":"margin-top: 3px;","value":"d","text":"Obtener 5, 3."}]}]}}', 2, 5, true, '2014-12-07 14:49:15.641887', '2014-12-09 08:59:35.682086', 'actividad-3-1', 13);
INSERT INTO course_data VALUES (11, 'Actividad 3. Conceptualización', 9, '{"footerBackground":"#3DB2BC","footerHeight":"197px","hasGrade":true,"images":[{"src":"julian_estudio.png","alt":"Imagen con un niño que tiene un lápiz en la mano con el cual escribe sobre una hoja como muestra de estudio.","styles":"bottom: 10px; left: 0;","imageStyles":"width: 95%;"}],"instructionRow":{"class":"col-md-6"},"instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 101px;","instruction":"La gráfica representa los minutos de estudio de Julián durante cada día de la semana.  Observa la gráfica y escribe sobre la línea la respuesta correspondiente."},"canvasRow":{"class":"col-md-6 pull-right","styles":"height: 200px;"},"activityName":"study_minutes","method":0,"canvasData":{"width":1720,"height":857,"maxHeight":200,"maxWidth":540,"atlasMap":"horizontal_bars_sheet.png","media":false,"horizontal":true,"bars":[{"x":400,"y":241,"name":"b1"},{"x":400,"y":338,"name":"b2"},{"x":400,"y":435,"name":"b3"},{"x":400,"y":535,"name":"b4"},{"x":400,"y":630,"name":"b5"}],"atlasJson":"{\"frames\":[{\"filename\":\"b1\",\"frame\":{\"x\":0,\"y\":1014,\"w\":508,\"h\":77},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":508,\"h\":77},\"sourceSize\":{\"w\":508,\"h\":77}},{\"filename\":\"b2\",\"frame\":{\"x\":0,\"y\":936,\"w\":813,\"h\":77},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":813,\"h\":77},\"sourceSize\":{\"w\":813,\"h\":77}},{\"filename\":\"b3\",\"frame\":{\"x\":509,\"y\":1014,\"w\":406,\"h\":77},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":406,\"h\":77},\"sourceSize\":{\"w\":406,\"h\":77}},{\"filename\":\"b4\",\"frame\":{\"x\":814,\"y\":936,\"w\":610,\"h\":77},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":610,\"h\":77},\"sourceSize\":{\"w\":610,\"h\":77}},{\"filename\":\"b5\",\"frame\":{\"x\":0,\"y\":858,\"w\":1219,\"h\":77},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":1219,\"h\":77},\"sourceSize\":{\"w\":1219,\"h\":77}},{\"filename\":\"bg\",\"frame\":{\"x\":0,\"y\":0,\"w\":1702,\"h\":857},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":1702,\"h\":857},\"sourceSize\":{\"w\":1702,\"h\":857}}],\"meta\":{\"app\":\"http://www.leshylabs.com/apps/sstool/\",\"version\":\"Leshy SpriteSheet Tool v0.8.1\",\"size\":{\"w\":1702,\"h\":1091},\"scale\":1}}"},"pattern":"word","activity":{"class":"col-md-12","styles":"margin-top: 10px;","hasIcon":true,"formClass":"col-md-6 pull-right","items":[{"text":"¿Cuántos minutos estudió el día martes?","answer":60},{"text":"¿Qué día estudió 50 minutos?","answer":"viernes"},{"text":"¿Cuál día estudió más tiempo?","answer":"lunes"},{"text":"¿Cuántos minutos estudió durante la semana?","answer":350},{"text":"¿Cuántos minutos más estudió el jueves comparado con el viernes?","answer":30},{"text":"¿Cuál día estudió menos tiempo?","answer":"miércoles"}]}}', 2, 5, true, '2014-12-04 09:31:39.622601', '2014-12-09 09:03:11.886879', 'actividad-1-3', 11);
INSERT INTO course_data VALUES (14, 'Actividades de evidencia', 11, '{"downloadInstruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 100px; margin-top: 18px;","instruction":"Haz clic sobre el ícono superior para descargar las actividades."},"uploadInstruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 100px; margin-top: 18px;","instruction":"Arrastra el documento hacia el recuadro para enviar las actividades de evidencia."}}', 2, 5, true, '2015-01-29 09:41:05.165385', '2015-01-29 09:41:05.165385', 'evidencia', 14);
INSERT INTO course_data VALUES (15, 'Introducción', 2, '{"intro":"Muchos objetos a nuestro alrededor tienen apariencia de figura geométrica, en algunos casos estos se encuentran modificados sin cambiar su forma.<br /><br />En esta lección descubrirás:<br /><br />Cómo están clasificados los cuadriláteros y cuáles son los movimientos que se pueden realizar sobre una figura plana.","standard":"<ul><li>Identifico, represento y utilizo ángulos en giros, aberturas, inclinaciones, figuras, puntas y esquinas en situaciones estáticas y dinámicas.</li><li>Identifico y justifico relaciones de congruencia y semejanza entre figuras.</li></ul>","element":"<ul><li>Conocer ángulos en giros, aberturas, inclinaciones, figuras, puntas y esquinas en situaciones estáticas y dinámicas.</li><li>Identificar figuras congruentes y semejantes.</li></ul>"}', 0, 6, true, '2015-02-03 10:11:10.613303', '2015-02-03 10:11:10.613303', 'intro', 1);
INSERT INTO course_data VALUES (17, 'Tema 1', 13, '{"lessonTitle":"Clasificación de cuadriláteros","footerBackground":"#607944","footerHeight":"244px","instruction":{"hasContent":true,"hasInstruction":true,"hasHeader":false,"hasSmallTitle":true,"instructionBg":"yellow-background","styles":"width: 100%; display: table;","contentStyles":"width: 23%; height: 115px; display: table-cell; vertical-align: middle; float: none !important;","instructionStyles":"width: 77%; height: 135px; display: table-cell; vertical-align: middle; float: none !important;","contentMainStyles":"width: 100%; height: 100%; font-size: 23px; text-align: center; padding-top: 20px; padding-left: 10px; padding-right: 10px;","text":"Clasificación de cuadriláteros","instruction":"Haz clic sobre cada nombre para conocer su forma y sus características.","iconInstruction":"pr-icon pr-icon-circle-arrow half","contentClasses":"pr-pacifico-font"},"containersClass":"col-md-4","containers":[[{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height:279px; padding-top: 0;","title":"Rectángulo","contentIcon":"pr-icon-container-audio","headerButton":{"audio":"sample.mp3"},"main":{"image":"tema1_cuadrilatero_rectangulo.png","imageStyles":"margin-top: 4px","imageContainerStyles":"width: 100%; height: 214px;","listItems":["Tiene cuatro ángulos rectos."]}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 279px; padding-top: 0;","title":"Cuadrado","contentIcon":"pr-icon-container-audio","headerButton":{"audio":"sample.mp3"},"main":{"image":"tema1_cuadrilatero_cuadrado.png","imageStyles":"height: 200px; margin-top: 4px","imageContainerStyles":"width: 100%; height: 214px;","listItems":["Posee cuatro lados de igual longitud y cuatro ángulos rectos."]}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 279px; padding-top: 0;","title":"Rombo","contentIcon":"pr-icon-container-audio","headerButton":{"audio":"sample.mp3"},"main":{"image":"tema1_cuadrilatero_rombo.png","imageStyles":"height: 200px; margin-top: 4px","imageContainerStyles":"width: 100%; height: 214px;","listItems":["Tiene los cuatro lados de igual longitud."]}}],[{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 279px; padding-top: 0;","title":"Paralelogramo","contentIcon":"pr-icon-container-audio","headerButton":{"audio":"sample.mp3"},"main":{"image":"tema1_cuadrilatero_paralelogramo.png","imageStyles":"margin-top: 4px","imageContainerStyles":"width: 100%; height: 214px;","listItems":["Los dos pares de lados opuestos son paralelos."]}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 279px; padding-top: 0;","title":"Trapecio","contentIcon":"pr-icon-container-audio","headerButton":{"audio":"sample.mp3"},"main":{"image":"tema1_cuadrilatero_trapecio.png","imageStyles":"margin-top: 4px","imageContainerStyles":"width: 100%; height: 214px;","listItems":["Tiene un par de lados opuestos paralelos."]}},{"hasContent":true,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 20px; height: 47px;","stylesContentIcon":"height: 47px; width: 60px;","contentMainStyles":"width: 100%; height: 279px; padding-top: 0;","title":"Trapezoide","contentIcon":"pr-icon-container-audio","headerButton":{"audio":"sample.mp3"},"main":{"image":"tema1_cuadrilatero_trapezoide.png","imageStyles":"margin-top: 4px","imageContainerStyles":"width: 100%; height: 214px;","listItems":["No tiene lados opuestos paralelos."]}}]]}', 1, 6, true, '2015-02-05 14:41:25.000321', '2015-02-05 14:41:25.000321', 'tema-1-2', 3);
INSERT INTO course_data VALUES (18, 'Tema 1', 14, '{"lessonTitle":"Clasificación de paralelogramos","footerBackground":"#607944","footerHeight":"244px","images":[{"src":"tema1_paralelogramo_cubos.png","styles":"left: 122px; bottom: 144px;"}]}', 1, 6, true, '2015-02-11 16:38:41.600544', '2015-02-11 16:38:41.600544', 'tema-1-3', 4);


--
-- Name: course_data_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('course_data_id_seq', 18, true);


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO courses VALUES (1, 'mat', 0, NULL, '{"name": "Matemáticas"}', 0, 0, true, '2014-08-25 11:22:35.742182', '2014-08-25 11:22:35.742182');
INSERT INTO courses VALUES (2, 'mat04', 1, 'curso/mat/cuarto', '{"grade":"cuarto","course_module":"mat-04","resources":"cuarto/mat/","course_intro":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.Lorem ipsum dolor sit amet, consectetur.","header_img":"header-matematicas-550.png","menu_img":"matematicas_menu.png","menu_img_styles":"left: -26px;bottom: 40px;width: 230px;","course_video":"<iframe width=\"500\" height=\"300\" src=\"https://www.youtube.com/embed/vLydXu6VKZo?modestbranding=1&amp;rel=0&amp;showinfo=0\" frameborder=\"0\" ></iframe>","course_credits":[{"title":"Experto temático","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Asesoría pedagógica","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Diseño mediacional","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Diseño web","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Diseño gráfico","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Ilustración","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Año","name":2014,"icon":"pr-icon-tiny-calendar"},{"title":"Versión","name":"0.01","icon":"pr-icon-tiny-version"}]}', 1, 0, true, '2014-08-25 11:37:48.091375', '2014-10-28 14:28:34.150952');
INSERT INTO courses VALUES (5, 'mat410', 2, 'curso/mat/cuarto/10', '{"id":"mat-04-10","guide":3,"lesson_num":"2","lesson_name":"2 - Probabilidad y estadística","pdf_path":"/assets/pdf/cuarto/mat/mat410.pdf"}', 2, 0, true, '2014-10-23 12:06:13.060104', '2014-12-09 13:54:50.553603');
INSERT INTO courses VALUES (6, 'mat409', 2, 'curso/mat/cuarto/09', '{"id":"mat-04-09","guide":3,"lesson_num":"1","lesson_name":"1 - Cuadriláteros y movimientos","pdf_path":"/assets/pdf/cuarto/mat/mat409.pdf"}', 2, 0, true, '2015-02-03 09:35:01.484569', '2015-02-03 09:35:01.484569');


--
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('courses_id_seq', 6, true);


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


--
-- Name: templates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('templates_id_seq', 14, true);


--
-- Data for Name: user_progresses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO user_progresses VALUES (678, 'mat_04_03', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 674, NULL, NULL, '2015-02-09 21:54:32.851167', '2015-02-09 21:54:32.851167');
INSERT INTO user_progresses VALUES (680, 'mat_04_03_02', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 2, 678, true, false, '2015-02-09 21:54:32.878229', '2015-02-09 21:54:32.878229');
INSERT INTO user_progresses VALUES (683, 'mat409_tema-1-2', NULL, 'mjquintero@ucn.edu.co', 4, '{"done":true}', 3, 679, true, false, '2015-02-09 21:54:45.033171', '2015-02-11 22:38:15.025941');
INSERT INTO user_progresses VALUES (684, 'mat409_tema-1-3', NULL, 'mjquintero@ucn.edu.co', 4, '{"done":false}', 3, 679, true, true, '2015-02-11 21:50:05.460411', '2015-02-11 22:38:15.245378');
INSERT INTO user_progresses VALUES (675, 'mat_04_00', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 674, NULL, NULL, '2015-02-09 21:54:32.796371', '2015-02-09 21:54:32.796371');
INSERT INTO user_progresses VALUES (674, 'mat_04', NULL, 'mjquintero@ucn.edu.co', 4, '{"click_here":true,"click_here_menu":true,"progress":[null,null,null,{"1":{"id":6,"link":"curso/mat/cuarto/09","enabled":true,"current":true},"2":{"id":5,"link":"curso/mat/cuarto/10","enabled":true,"current":false}}],"lesson_progress":{"mat409":{"intro":{"id":681,"name":"Introducción","display_name":"intro","url":"curso/mat/cuarto/09/intro","type":0,"enabled":true,"current":false},"tema-1-1":{"id":682,"name":"Tema 1","display_name":"tema-1-1","url":"curso/mat/cuarto/09/tema-1-1","type":1,"enabled":true,"current":false,"done":true},"tema-1-2":{"id":683,"name":"Tema 1","display_name":"tema-1-2","url":"curso/mat/cuarto/09/tema-1-2","type":1,"enabled":true,"current":false,"done":true},"tema-1-3":{"id":684,"name":"Tema 1","display_name":"tema-1-3","url":"curso/mat/cuarto/09/tema-1-3","type":1,"enabled":true,"current":true,"done":false}}}}', 0, 0, NULL, NULL, '2015-02-09 21:54:32.675873', '2015-02-11 22:38:15.349876');
INSERT INTO user_progresses VALUES (676, 'mat_04_01', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 674, NULL, NULL, '2015-02-09 21:54:32.8121', '2015-02-09 21:54:32.8121');
INSERT INTO user_progresses VALUES (677, 'mat_04_02', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 674, NULL, NULL, '2015-02-09 21:54:32.828552', '2015-02-09 21:54:32.828552');
INSERT INTO user_progresses VALUES (679, 'mat_04_03_01', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 2, 678, true, true, '2015-02-09 21:54:32.862375', '2015-02-09 21:54:45.056974');
INSERT INTO user_progresses VALUES (682, 'mat409_tema-1-1', NULL, 'mjquintero@ucn.edu.co', 4, '{"done":true}', 3, 679, true, false, '2015-02-09 21:54:45.016505', '2015-02-09 21:54:55.070892');
INSERT INTO user_progresses VALUES (681, 'mat409_intro', NULL, 'mjquintero@ucn.edu.co', 4, 'null', 3, 679, true, false, '2015-02-09 21:54:44.997753', '2015-02-09 21:54:58.927938');


--
-- Name: user_progresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('user_progresses_id_seq', 684, true);


--
-- Name: course_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY course_data
    ADD CONSTRAINT course_data_pkey PRIMARY KEY (id);


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
-- Name: unique_schema_migrations; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE UNIQUE INDEX unique_schema_migrations ON schema_migrations USING btree (version);


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

