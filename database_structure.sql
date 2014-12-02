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
    grade double precision,
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

ALTER TABLE ONLY templates ALTER COLUMN id SET DEFAULT nextval('templates_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_progresses ALTER COLUMN id SET DEFAULT nextval('user_progresses_id_seq'::regclass);


--
-- Data for Name: course_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO course_data VALUES (1, 'Introducción', 2, '{"intro": "La <b>probabilidad</b> mide las posibilidades de cada uno de los resultados de un suceso o evento.<br /><br />La <b>estadística</b> es una herramienta que se utiliza para organizar información y encontrar conclusiones.<br /><br />En esta lección conocerás:<br /><br />- Cómo identificar eventos probables, cómo organizar e interpretar  información en tablas y gráficas, qué representa la media y cómo se calcula.", "standard":"\<ul\>\<li\>Conjeturo y pongo a prueba predicciones acerca de la posibilidad de ocurrencia de eventos.\</li\>\<li\>Represento datos usando tablas y gráficas (pictogramas, gráficas de barras, diagramas de líneas, diagramas circulares).\</li\>\<li\>Interpreto información presentada en tablas y gráficas (pictogramas, gráficas de barras, diagramas de líneas, diagramas circulares).\</li\>\</ul\>", "element":"\<ul\>\<li\>Evaluar la posibilidad de ocurrencia de eventos.\</li\>\<li\>Representar datos usando tablas y gráficas.\</li\>\<li\>Interpretar los datos presentados en tablas y gráficas.\</li\>\</ul\>"}', 0, 5, true, '2014-09-30 17:21:39.536721', '2014-10-27 14:58:20.779577', 'intro', 1);
INSERT INTO course_data VALUES (2, 'Tema 1', 4, '{"lessonTitle":"Sucesos seguros, posibles e imposibles","footerBackground":"#6d5143","footerHeight":"212px","images":[{"src":"circo1.png","styles":"bottom: 0; left: 0;"},{"src":"circo2.png","styles":"bottom: 124px; right: 0;"},{"src":"andres_lat_izq.png","styles":"bottom: 74px; right: 48px;"}],"instruction":{"hasContent":false,"hasInstruction":true,"styles":"float: none; margin: 0 auto; height: 112px; width: 552px;","instructionStyles":"width: 552px; height: 112px; font-size: 12px;","instructionBg":"blue-green-background","instruction":"Andrés tomará un globo de cada grupo sin mirar su color. ¿Será azul?<br>Haz clic sobre cada grupo de globos para conocer el tipo de suceso."},"itemsImagesClass":"col-md-4","itemsImage":[{"image":"globos_azul.png","stylesImage":"float: right;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso seguro<\/span> porque ocurre siempre."},{"image":"globos_azul_amarillo.png","styles":"text-align: center;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso posible<\/span> porque puede ocurrir o no."},{"image":"globos_amarillo.png","stylesImage":"float: left;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso imposible<\/span> porque nunca ocurre."}]}', 1, 5, true, '2014-10-29 16:31:00.793295', '2014-11-27 16:24:21.106281', 'tema-1-1', 2);
INSERT INTO course_data VALUES (3, 'Tema 1', 4, '{"lessonTitle":"Más probable, menos probable","footerBackground":"#6d5143","footerHeight":"250px","images":[{"src":"canasta_bolas.png","styles":"bottom: 80px; left: 30px;"}],"instruction":{"hasContent":true,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 405px; float: right; margin-right: 200px;","contentStyles":"100%","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px;","instructionStyles":"width: 100%; height: 100px;","contentMainStyles":"height: 62px; font-size:12px;","title":"Más probable, menos probable","text":"En la canasta hay tres pelotas verdes y seis pelotas naranjas y Luis va a sacar una sin mirar. ¿De qué color es la pelota? <b>Analicemos</b>","instruction":"Haz clic sobre cada una de las pelotas, ubicadas en la parte inferior, para conocer el tipo de probabilidad.","contentIcon":"pr-icon-notebook"},"stylesImagesInfo":"bottom: 48px;","itemsImagesClass":"col-md-12","itemsImage":[{"image":"pelota_verde.png","styles":"height: 120px;","stylesImage":"position: absolute; right: 500px;","stylesPopover":"left: 220px; width: 468px; height: 47px; bottom: 26px; padding: 4px; padding-left: 82px;","stylesPopoverTitle":"position: absolute; left: 0; width: 80px; height: 100%; top: 0; padding: 13px; font-size: 16px; font-weight: 100; color: #FFF; background-color: #3AA835;","contentTitle":"Verde","content":"En la canasta hay menos pelotas verdes que naranjas, por lo tanto es <b>menos probable</b> sacar una pelota verde que una pelota naranja."},{"image":"pelota_naranja.png","styles":"height: 120px;","stylesImage":"position: absolute; right: 525px;","stylesPopover":"left: 244px; width: 468px; height: 47px; bottom: 51px; padding: 4px; padding-left: 82px;","stylesPopoverTitle":"position: absolute; left: 0; width: 80px; height: 100%; top: 0; padding: 13px; font-size: 16px; font-weight: 100; color: #FFF; background-color: #ED7D32;","contentTitle":"Naranja","content":"En la canasta hay más pelotas naranjas que verdes, por lo tanto es <b>más probable</b> sacar una pelota naranja que una pelota verde."}]}', 1, 5, true, '2014-11-07 09:57:27.884471', '2014-11-27 16:24:33.182935', 'tema-1-2', 3);
INSERT INTO course_data VALUES (4, 'Tema 2', 5, '{"lessonTitle":"Organizando datos","footerBackground":"#4D869F","footerHeight":"214px","images":[{"src":"puesto_frutas.png","styles":"left: 0; bottom: 10px;"},{"src":"pesa_y_frutas.png","styles":"right: 70px; bottom: 80px;"}],"stylesCont":"padding-left: 170px;","stylesTableCont":"padding-right: 170px;","content":{"hasContent":true,"hasInstruction":false,"title":"Organizando datos","text":"Carlos quiere organizar en las siguiente tabla las frutas que comió su familia durante  el fin de semana.<br><br><b>Sábado</b>: tres peras, dos bananos, cinco manzanas y cuatro mandarinas.<br><br><b>Domingo</b>: una pera, seis bananos, cuatro manzanas y tres mandarinas.","contentIcon":"pr-icon-notebook","contentHeaderStyles":"width: 100%;","contentTitleStyles":"font-size: 20px;","contentMainStyles":"width: 100%;"},"instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","instructionStyles":"height: 102px;","instruction":"Ayuda a Carlos escribiendo la información en la tabla."},"pattern":"num","table":{"titles":[{"title":"Fruta","secondTitle":"Día"},{"title":"Sábado"},{"title":"Domingo"},{"title":"Total"}],"items":[[{"text":"Manzana"},{"answer":5},{"answer":4},{"answer":9}],[{"text":"Mandarina"},{"answer":4},{"answer":3},{"answer":7}],[{"text":"Banano"},{"answer":2},{"answer":6},{"answer":8}],[{"text":"Pera"},{"answer":3},{"answer":1},{"answer":4}],[{"text":"Total"},{"answer":14},{"answer":14},{"answer":28}]]}}', 1, 5, true, '2014-11-10 12:37:24.089205', '2014-11-24 11:28:28.911048', 'tema-2-1', 4);
INSERT INTO course_data VALUES (5, 'Tema 2', 6, '{"lessonTitle":"Interpretando datos","footerBackground":"#4D869F","footerHeight":"214px","images":[{"src":"puesto_frutas.png","styles":"left: 0; bottom: 10px;"},{"src":"carlos_frente.png","styles":"right: 90px; bottom: 30px;"}],"pattern":"word","stylesInstructionRow":"height: 102px;","stylesInstructionContainer":"float: none; margin: auto; height: 100%; left: 100px;","instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","instructionStyles":"height: 102px; width: 100%;","instruction":"De acuerdo a la tabla anterior, ayuda a Carlos a contestar las siguientes preguntas escribiendo en los espacios correspondientes."},"stylesActionRow":"height: 302px;","stylesActionCol":"width: 429px; float: none; margin: auto; height: 100%; left: 160px;","items":[{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuántas frutas se comieron el sábado?</b>","answer":"14"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuál fue la fruta que más comió su familia durante el fin de semana?</b>","answer":"Manzana"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuántas frutas se comieron en los dos días?</b>","answer":"28"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuál fruta comió menos su familia durante el fin de semana?</b>","answer":"Pera"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuántos bananos se comieron el día sábado?</b>","answer":"2"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Qué representa el número 7 en la tabla? <span class=\"text-right\">Total de:</span></b>","answer":"Mandarinas"}],"slideScreenOn":true,"stylesScreenContent":"display: table; height: 80%; width: 100%; margin: auto;","stylesScreenImage":"width: 373px; display: table-cell; vertical-align: middle; margin: auto; padding: 0; float: none;","slideScreenTitle":"Tabla informativa","slideScreenImage":"tabla_frutas.png","slideScreenAlt":"Tabla con informacón del tema 2-1"}', 1, 5, true, '2014-11-12 11:40:57.285378', '2014-11-19 17:34:27.376858', 'tema-2-2', 5);
INSERT INTO course_data VALUES (6, 'Tema 2', 7, '{"lessonTitle":"Gráfica de barras","footerBackground":"#4D869F","footerHeight":"213px","images":[{"src":"daniel_frente.png","styles":"bottom: 80px; left: 80px;"},{"src":"elemen_deporte.png","styles":"bottom: 56px; left: 248px;"}],"stylesInstructionRow":"margin-bottom: 10px;","stylesInstructionCol":"float: none; position: relative; margin: auto; height: 119px; left: 70px; width: 686px;","instruction":{"hasContent":true,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","contentStyles":"width: 50%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px;","instructionStyles":"width: 50%; height: 118px;","contentMainStyles":"height: 62px; font-size:12px;","title":"Gráfica de barras","text":"Daniel preguntó a sus amigos cuál es su deporte favorito y organizó la información en una gráfica.","instruction":"Haz clic sobre cada deporte para visualizar su gráfica.","contentIcon":"pr-icon-notebook"},"stylesMainContent":"width: 686px; left: 70px;","table":{"stylesContainer":"width: 170px; float: left;","titles":[{"title":"Deportes"},{"title":"Niños y niñas"}],"items":[[{"text":"Natación"},{"text":"4"}],[{"text":"Fútbol"},{"text":"7"}],[{"text":"Baloncesto"},{"text":"3"}],[{"text":"Voleibol"},{"text":"2"}],[{"text":"Ciclismo"},{"text":"3"}]]},"stylesGraphicContainer":"width: 450px; float: right;","method":0,"graphicData":{"width":450,"height":320,"atlasMap":"deporte_favorito_tabla.png","media":false,"buttons":[{"x":110,"y":285,"btn":"natacion"},{"x":174,"y":285,"btn":"futbol"},{"x":232,"y":285,"btn":"baloncest"},{"x":307,"y":285,"btn":"voleibol"},{"x":365,"y":285,"btn":"ciclismo"}],"bars":[{"x":142,"y":272,"name":"g1"},{"x":200,"y":272,"name":"g2"},{"x":265,"y":272,"name":"g3"},{"x":331,"y":272,"name":"g4"},{"x":395,"y":272,"name":"g5"}],"atlasJson":"{\"frames\":[{\"filename\":\"ciclismo\",\"frame\":{\"x\":137,\"y\":407,\"w\":58,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":58,\"h\":17},\"sourceSize\":{\"w\":58,\"h\":17}},{\"filename\":\"futbol\",\"frame\":{\"x\":0,\"y\":371,\"w\":52,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":52,\"h\":17},\"sourceSize\":{\"w\":52,\"h\":17}},{\"filename\":\"baloncest\",\"frame\":{\"x\":25,\"y\":389,\"w\":68,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":68,\"h\":17},\"sourceSize\":{\"w\":68,\"h\":17}},{\"filename\":\"bg\",\"frame\":{\"x\":0,\"y\":0,\"w\":506,\"h\":370},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":506,\"h\":370},\"sourceSize\":{\"w\":506,\"h\":370}},{\"filename\":\"g5\",\"frame\":{\"x\":507,\"y\":273,\"w\":24,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":74},\"sourceSize\":{\"w\":24,\"h\":74}},{\"filename\":\"g1\",\"frame\":{\"x\":507,\"y\":0,\"w\":24,\"h\":99},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":99},\"sourceSize\":{\"w\":24,\"h\":99}},{\"filename\":\"g2\",\"frame\":{\"x\":507,\"y\":100,\"w\":24,\"h\":172},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":172},\"sourceSize\":{\"w\":24,\"h\":172}},{\"filename\":\"g3\",\"frame\":{\"x\":507,\"y\":348,\"w\":24,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":74},\"sourceSize\":{\"w\":24,\"h\":74}},{\"filename\":\"g4\",\"frame\":{\"x\":0,\"y\":389,\"w\":24,\"h\":49},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":49},\"sourceSize\":{\"w\":24,\"h\":49}},{\"filename\":\"voleibol\",\"frame\":{\"x\":25,\"y\":407,\"w\":52,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":52,\"h\":17},\"sourceSize\":{\"w\":52,\"h\":17}},{\"filename\":\"natacion\",\"frame\":{\"x\":78,\"y\":407,\"w\":58,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":58,\"h\":17},\"sourceSize\":{\"w\":58,\"h\":17}}]}"}}', 1, 5, true, '2014-11-19 09:40:29.86523', '2014-11-26 17:31:55.584311', 'tema-2-3', 6);
INSERT INTO course_data VALUES (7, 'Tema 2', 7, '{"lessonTitle":"Pictogramas","footerBackground":"#4D869F","footerHeight":"163px","images":[{"src":"carpa_circo.png","styles":"bottom: 100px; right: 10px;"}],"content":{"hasContent":true,"hasInstruction":false,"styles":"width: 61.965812%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px; height: 47px;","stylesContentIcon":"height: 47px;","contentMainStyles":"font-size: 12px; width: 100%; padding-top: 12px;","title":"Pictogramas","text":"En un pictograma se utiliza una figura para representar cierta cantidad de datos. En este caso, la figura <span class=\"pr-icon pr-icon-tiny-people dark\" style=\"margin-bottom: -6px;\"></span> representa 100 personas. Observa el siguiente ejemplo.","contentIcon":"pr-icon-notebook"},"stylesInstructionRow":"margin-top: 10px","stylesInstructionCol":"width: 100%; padding: 0","instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 40%; margin-left: 21.965811%;","instructionStyles":"width: 100%; height: 100px;","instruction":"Haz clic sobre cada día de la semana para visualizar el pictograma correspondiente."},"stylesMainContent":"height: auto; min-height: 40%; float: left; width: 100%;","table":{"stylesContainer":"width: 149px; float: left; margin-top: -115px;","note":{"text":"Cantidad de personas que asisten a un circo durante la semana:"},"stylesMainContent":"min-height: 40%; height: auto;","stylesItems":"padding: 0; height: 36px;","titles":[{"title":"Día"},{"title":"Personas"}],"items":[[{"text":"Lunes"},{"text":"100"}],[{"text":"Martes"},{"text":"300"}],[{"text":"Miércoles"},{"text":"200"}],[{"text":"Jueves"},{"text":"400"}],[{"text":"Viernes"},{"text":"500"}],[{"text":"Sábado"},{"text":"900"}],[{"text":"Domingo"},{"text":"700"}],[{"text":"TOTAL"},{"text":"3100"}]]},"method":1,"stylesGraphicContainer":"float: left; margin-left: 8.1578947%; width: 38.947368%;","graphicData":{"width":349,"height":220,"atlasMap":"pictograma_sheet.png","positions":[{"y":0,"dia":"lunes"},{"y":32,"dia":"martes"},{"y":64,"dia":"miercoles"},{"y":96,"dia":"jueves"},{"y":128,"dia":"viernes"},{"y":160,"dia":"sabado"},{"y":192,"dia":"domingo"}],"positions2":[{"x":113},{"x":138},{"x":164},{"x":189},{"x":215},{"x":243},{"x":269},{"x":294},{"x":320}],"itemsPositions":[{"first":2,"times":1},{"first":34,"times":3},{"first":67,"times":2},{"first":99,"times":4},{"first":131,"times":5},{"first":163,"times":9},{"first":195,"times":7}],"atlasJson":"{\"frames\":[{\"filename\":\"domingo\",\"frame\":{\"x\":0,\"y\":24,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"jueves\",\"frame\":{\"x\":108,\"y\":24,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"lunes\",\"frame\":{\"x\":216,\"y\":24,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"martes\",\"frame\":{\"x\":0,\"y\":48,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"sabado\",\"frame\":{\"x\":108,\"y\":48,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"viernes\",\"frame\":{\"x\":216,\"y\":48,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"miercoles\",\"frame\":{\"x\":0,\"y\":72,\"w\":107,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":107,\"h\":23},\"sourceSize\":{\"w\":107,\"h\":23}},{\"filename\":\"barra\",\"frame\":{\"x\":0,\"y\":0,\"w\":345,\"h\":23},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":345,\"h\":23},\"sourceSize\":{\"w\":345,\"h\":23}},{\"filename\":\"pre\",\"frame\":{\"x\":108,\"y\":72,\"w\":20,\"h\":19},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":20,\"h\":19},\"sourceSize\":{\"w\":20,\"h\":19}}]}"}}', 1, 5, true, '2014-11-20 17:02:43.601155', '2014-12-02 17:59:10.043907', 'tema-2-4', 7);
INSERT INTO course_data VALUES (8, 'Tema 2', 7, '{"lessonTitle":"Media","footerBackground":"#4D869F","footerHeight":"167px","secondTemplate":true,"stylesContentRow":"padding: 0; margin-bottom: 16px;","content":{"hasContent":true,"hasInstruction":false,"styles":"width: 100%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px; height: 47px;","stylesContentIcon":"height: 47px;","contentMainStyles":"font-size: 12px; width: 100%; padding-top: 12px;","title":"Media","text":"<b>La media de un conjunto de datos se halla sumando los datos y dividiendo esa suma por la cantidad de datos</b>. Andrés tiene 24 globos de cuatro colores diferentes tal como lo indica la tabla. ¿Cuántos globos de cada color tendría Andrés, si tuviera la misma cantidad de globos por color?<ul class=\"list-unstyled pr-list-items\"><li class=\"pr-list-item\"><h5>Suma de datos: 8 + 6 + 3 + 7 = 24 globos</h5></li><li class=\"pr-list-item\"><h5>Cantidad de datos:  4 colores</h5></li></ul>","contentIcon":"pr-icon-notebook"},"stylesInstructionRow":"padding: 0;","instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 100px;","instruction":"Haz clic sobre la tabla de datos para observar cómo se construye la media."},"table":{"stylesContainer":"margin-bottom: 16px;","titles":[{"title":"Color"},{"title":"Azul"},{"title":"Verde"},{"title":"Amarillo"},{"title":"Rojo"}],"items":[[{"text":"Cantidad"},{"text":"8"},{"text":"6"},{"text":"3"},{"text":"7"}]]},"method":0,"graphicData":{"width":472,"height":370,"atlasMap":"media_sheet.png","media":true,"bars":[{"x":160,"y":271,"name":"b1"},{"x":225,"y":271,"name":"b2"},{"x":289,"y":271,"name":"b3"},{"x":352,"y":270,"name":"b4"}],"medias":[{"x":160,"y":73,"name":"b6"},{"x":289,"y":198,"name":"b7"},{"x":352,"y":98,"name":"b5"}],"atlasJson":"{\"frames\":[{\"filename\":\"bg\",\"frame\":{\"x\":52,\"y\":0,\"w\":472,\"h\":370},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":472,\"h\":370},\"sourceSize\":{\"w\":472,\"h\":370}},{\"filename\":\"line\",\"frame\":{\"x\":0,\"y\":374,\"w\":322,\"h\":4},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":322,\"h\":4},\"sourceSize\":{\"w\":322,\"h\":4}},{\"filename\":\"b1\",\"frame\":{\"x\":0,\"y\":175,\"w\":24,\"h\":198},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":198},\"sourceSize\":{\"w\":24,\"h\":198}},{\"filename\":\"b2\",\"frame\":{\"x\":0,\"y\":26,\"w\":24,\"h\":148},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":148},\"sourceSize\":{\"w\":24,\"h\":148}},{\"filename\":\"b3\",\"frame\":{\"x\":26,\"y\":51,\"w\":24,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":74},\"sourceSize\":{\"w\":24,\"h\":74}},{\"filename\":\"b4\",\"frame\":{\"x\":26,\"y\":201,\"w\":24,\"h\":172},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":172},\"sourceSize\":{\"w\":24,\"h\":172}},{\"filename\":\"b5\",\"frame\":{\"x\":0,\"y\":0,\"w\":25,\"h\":25},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":25,\"h\":25},\"sourceSize\":{\"w\":25,\"h\":25}},{\"filename\":\"b6\",\"frame\":{\"x\":26,\"y\":0,\"w\":25,\"h\":50},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":25,\"h\":50},\"sourceSize\":{\"w\":25,\"h\":50}},{\"filename\":\"b7\",\"frame\":{\"x\":26,\"y\":126,\"w\":24,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":74},\"sourceSize\":{\"w\":24,\"h\":74}}],\"meta\":{\"app\":\"http://www.leshylabs.com/apps/sstool/\",\"version\":\"Leshy SpriteSheet Tool v0.8.1\",\"size\":{\"w\":524,\"h\":378},\"scale\":1}}"}}', 1, 5, true, '2014-11-26 09:09:31.430011', '2014-11-26 17:45:57.927182', 'tema-2-5', 8);
INSERT INTO course_data VALUES (9, 'Actividad 1. Conceptualización', 8, '{"footerBackground":"#3DB2BC","footerHeight":"243px","images":[{"src":"puesto_helados.png","styles":"bottom: 150px; right: 0;"},{"src":"hombre_balotas.png","alt":"Señor haciendo girar una balotera con balotas de varios colores.","styles":"bottom: 12px; right: 40px;"}],"stylesInstructionRow":"float: none; height: 93px;","instruction":{"class":"col-md-7 center-block","hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","styles":"width: 100%;","instructionStyles":"width: 100%; height: 96px;","instruction":"En la balotera hay 50 balotas marcadas del 0 al 49. Arrastra hasta el frente de cada evento las opciones <span class=\"dark-gray-text\">seguro</span>, <span class=\"dark-gray-text\">posible</span> e <span class=\"dark-gray-text\">imposible</span> según corresponda."},"activityName":"possibilities","activity":{"width":500,"height":350,"atlasMap":"possibilities_sheet.png","textStyles":{"font":"12px Open Sans","fontWeight":"bold","fill":"#3f3f41","align":"left"},"answerStyles":{"fontWeight":"bold","fontSize":14,"fill":"#CF0D25"},"assetPositions":[{"x":3,"y":3,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota con el número 15:"},"answer":{"x":403.1666666666667,"y":16.222222222222225,"answer":"Posible"},"icons":{"x":13,"y":6}},{"x":3,"y":51,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota con el número 60:"},"answer":{"x":395.3333333333331,"y":16.222222222222225,"answer":"Imposible"},"icons":{"x":13,"y":53}},{"x":3,"y":99,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota con un número menor a 50:"},"answer":{"x":401.83333333333326,"y":16.222222222222225,"answer":"Seguro"},"icons":{"x":13,"y":102}},{"x":3,"y":147,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota que no esté numerada:"},"answer":{"x":395.3333333333331,"y":16.222222222222225,"answer":"Imposible"},"icons":{"x":13,"y":150}},{"x":3,"y":194.81658119658107,"name":"main_content_bar","text":{"x":72.55555555555549,"y":16.222222222222225,"text":"Sacar una balota con un número de un digito:"},"answer":{"x":403.1666666666667,"y":16.222222222222225,"answer":"Posible"},"icons":{"x":13,"y":197.51658119658103}},{"x":3,"y":262.77777777777777,"name":"buttons_container"}],"drops":[{"x":370,"y":3,"name":"active_bar"},{"x":370,"y":51,"name":"active_bar"},{"x":370,"y":99,"name":"active_bar"},{"x":370,"y":147,"name":"active_bar"},{"x":370,"y":194.81658119658107,"name":"active_bar"}],"dragsData":{"x":0,"y":8.846153846153852,"styles":{"font":"14px Open Sans","fontWeight":700,"fill":"#FFFFFF","align":"center"}},"drags":[{"x":83,"y":272,"name":"blue_draggable_block","value":"Seguro","text":{"text":"Seguro"}},{"x":83,"y":313,"name":"blue_draggable_block","value":"Seguro","text":{"text":"Seguro"}},{"x":192,"y":272,"name":"yellow_draggable_block","value":"Posible","text":{"text":"Posible"}},{"x":192,"y":313,"name":"yellow_draggable_block","value":"Posible","text":{"text":"Posible"}},{"x":301,"y":272,"name":"red_draggable_block","value":"Imposible","text":{"text":"Imposible"}},{"x":301,"y":313,"name":"red_draggable_block","value":"Imposible","text":{"text":"Imposible"}}],"atlasJson":"{\"frames\":[{\"filename\":\"buttons_container\",\"frame\":{\"x\":0,\"y\":0,\"w\":493,\"h\":90},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":493,\"h\":90},\"sourceSize\":{\"w\":493,\"h\":90}},{\"filename\":\"main_content_bar\",\"frame\":{\"x\":0,\"y\":91,\"w\":494,\"h\":41},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":494,\"h\":41},\"sourceSize\":{\"w\":494,\"h\":41}},{\"filename\":\"active_bar\",\"frame\":{\"x\":0,\"y\":133,\"w\":126,\"h\":41},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":126,\"h\":41},\"sourceSize\":{\"w\":126,\"h\":41}},{\"filename\":\"icon_right\",\"frame\":{\"x\":127,\"y\":133,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}},{\"filename\":\"icon_wrong\",\"frame\":{\"x\":163,\"y\":133,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}},{\"filename\":\"red_draggable_block\",\"frame\":{\"x\":235,\"y\":133,\"w\":102,\"h\":32},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":102,\"h\":32},\"sourceSize\":{\"w\":102,\"h\":32}},{\"filename\":\"blue_draggable_block\",\"frame\":{\"x\":338,\"y\":133,\"w\":102,\"h\":32},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":102,\"h\":32},\"sourceSize\":{\"w\":102,\"h\":32}},{\"filename\":\"yellow_draggable_block\",\"frame\":{\"x\":0,\"y\":175,\"w\":102,\"h\":32},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":102,\"h\":32},\"sourceSize\":{\"w\":102,\"h\":32}},{\"filename\":\"icon_arrow\",\"frame\":{\"x\":199,\"y\":133,\"w\":35,\"h\":35},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":35,\"h\":35},\"sourceSize\":{\"w\":35,\"h\":35}}]}"}}', 2, 5, true, '2014-11-27 16:23:23.696081', '2014-12-02 17:36:42.542794', 'actividad-1-1', 9);


--
-- Name: course_data_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('course_data_id_seq', 9, true);


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO courses VALUES (1, 'mat', 0, NULL, '{"name": "Matemáticas"}', 0, 0, true, '2014-08-25 11:22:35.742182', '2014-08-25 11:22:35.742182');
INSERT INTO courses VALUES (5, 'mat410', 2, 'curso/mat/cuarto/10', '{"id": "mat-04-10", "guide": 3, "lesson_num": "2", "lesson_name": "2 - Probabilidad y estadística"}', 2, 0, true, '2014-10-23 12:06:13.060104', '2014-10-28 14:28:14.677186');
INSERT INTO courses VALUES (2, 'mat04', 1, 'curso/mat/cuarto', '{"grade":"cuarto","course_module":"mat-04","resources":"cuarto/mat/","course_intro":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.Lorem ipsum dolor sit amet, consectetur.","header_img":"header-matematicas-550.png","menu_img":"matematicas_menu.png","menu_img_styles":"left: -26px;bottom: 40px;width: 230px;","course_video":"<iframe width=\"500\" height=\"300\" src=\"https://www.youtube.com/embed/vLydXu6VKZo?modestbranding=1&amp;rel=0&amp;showinfo=0\" frameborder=\"0\" ></iframe>","course_credits":[{"title":"Experto temático","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Asesoría pedagógica","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Diseño mediacional","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Diseño web","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Diseño gráfico","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Ilustración","name":"xxx","icon":"pr-icon-tiny-user"},{"title":"Año","name":2014,"icon":"pr-icon-tiny-calendar"},{"title":"Versión","name":"0.01","icon":"pr-icon-tiny-version"}]}', 1, 0, true, '2014-08-25 11:37:48.091375', '2014-10-28 14:28:34.150952');


--
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('courses_id_seq', 5, true);


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO schema_migrations VALUES ('20140819223039');
INSERT INTO schema_migrations VALUES ('20140825151315');
INSERT INTO schema_migrations VALUES ('20140825152819');
INSERT INTO schema_migrations VALUES ('20140908151034');


--
-- Data for Name: templates; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO templates VALUES (2, 'Introduction', 'lesson-intro', 'Esta es la directiva que incluye el template para la introduccion de las lecciones', 0, true, '2014-09-30 17:16:50.989712', '2014-09-30 17:16:50.989712');
INSERT INTO templates VALUES (4, 'Images Info Popover', 'images-info-popover', 'Directive que lista una serie de imagenes que al darle clic aparece un cuadro de información.', 1, true, '2014-10-29 16:28:03.530421', '2014-10-29 16:28:03.530421');
INSERT INTO templates VALUES (5, 'Form table', 'table-form', 'Esta plantilla incluye una tabla que contiene un formulario, también posee un contendor para conceptos de la lección y su instrucción-', 1, true, '2014-11-10 09:59:36.929535', '2014-11-10 15:22:07.100074');
INSERT INTO templates VALUES (6, 'Text Inputs Form', 'text-input-form', 'Esta directiva incluye una instrucción y un contenedor con una lista de texto y respuesta.', 1, true, '2014-11-12 11:39:43.516941', '2014-11-12 11:39:43.516941');
INSERT INTO templates VALUES (7, 'Graphic and Table', 'graphic-table', 'Esta plantilla incluye opción de instrucción y contenido, además de una tabla de datos para la gráfica animada. También incluye un cuadro de texto extra para anidar información adicional a la gráfica.', 1, true, '2014-11-19 09:26:15.736321', '2014-11-19 09:26:15.736321');
INSERT INTO templates VALUES (8, 'Drag and Drop', 'drag-drop', 'Esta plantilla posee una funcionalidad de arrastre. Dependiendo de los datos que se le asignen sería arrastre de texto o imágenes. Su principal uso será para actividades.', 2, true, '2014-11-27 16:09:24.403871', '2014-11-27 16:16:54.616893');


--
-- Name: templates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('templates_id_seq', 8, true);


--
-- Data for Name: user_progresses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO user_progresses VALUES (294, 'mat_04_00', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 293, NULL, NULL, '2014-11-27 22:50:40.201681', '2014-11-27 22:50:40.201681');
INSERT INTO user_progresses VALUES (295, 'mat_04_01', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 293, NULL, NULL, '2014-11-27 22:50:40.224869', '2014-11-27 22:50:40.224869');
INSERT INTO user_progresses VALUES (296, 'mat_04_02', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 293, NULL, NULL, '2014-11-27 22:50:40.247701', '2014-11-27 22:50:40.247701');
INSERT INTO user_progresses VALUES (297, 'mat_04_03', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 293, NULL, NULL, '2014-11-27 22:50:40.271876', '2014-11-27 22:50:40.271876');
INSERT INTO user_progresses VALUES (299, 'mat410_intro', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, true, '2014-11-27 22:50:54.215669', '2014-11-27 22:50:54.215669');
INSERT INTO user_progresses VALUES (300, 'mat410_tema-1-1', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, true, '2014-11-27 22:50:54.244726', '2014-11-27 22:50:54.244726');
INSERT INTO user_progresses VALUES (298, 'mat_04_03_02', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 2, 297, true, true, '2014-11-27 22:50:40.288902', '2014-11-27 22:50:54.418576');
INSERT INTO user_progresses VALUES (301, 'mat410_tema-1-2', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, false, '2014-11-27 22:50:54.259668', '2014-12-01 11:09:46.093987');
INSERT INTO user_progresses VALUES (302, 'mat410_tema-2-1', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, false, '2014-11-27 22:50:54.278411', '2014-12-01 11:09:58.896882');
INSERT INTO user_progresses VALUES (303, 'mat410_tema-2-2', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, false, '2014-11-27 22:50:54.29692', '2014-12-01 11:10:18.775494');
INSERT INTO user_progresses VALUES (304, 'mat410_tema-2-3', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, false, '2014-11-27 22:50:54.320587', '2014-12-01 11:10:35.660827');
INSERT INTO user_progresses VALUES (305, 'mat410_tema-2-4', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, false, '2014-11-27 22:50:54.338794', '2014-12-01 11:10:44.123919');
INSERT INTO user_progresses VALUES (306, 'mat410_tema-2-5', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, false, '2014-11-27 22:50:54.364608', '2014-12-01 11:11:02.83658');
INSERT INTO user_progresses VALUES (307, 'mat410_actividad-1-1', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 4, 298, true, false, '2014-11-27 22:50:54.383215', '2014-12-01 11:11:22.739381');
INSERT INTO user_progresses VALUES (293, 'mat_04', NULL, 'mjquintero@ucn.edu.co', 4, '{"click_here":true,"click_here_menu":true,"progress":[null,null,null,{"2":{"id":5,"link":"curso/mat/cuarto/10","enabled":true,"current":true}}],"lesson_progress":{"mat410":{"intro":{"id":299,"name":"Introducción","display_name":"intro","url":"curso/mat/cuarto/10/intro","type":0,"enabled":true,"current":true},"tema-1-1":{"id":300,"name":"Tema 1","display_name":"tema-1-1","url":"curso/mat/cuarto/10/tema-1-1","type":1,"enabled":true,"current":true},"tema-1-2":{"id":301,"name":"Tema 1","display_name":"tema-1-2","url":"curso/mat/cuarto/10/tema-1-2","type":1,"enabled":true,"current":false},"tema-2-1":{"id":302,"name":"Tema 2","display_name":"tema-2-1","url":"curso/mat/cuarto/10/tema-2-1","type":1,"enabled":true,"current":false},"tema-2-2":{"id":303,"name":"Tema 2","display_name":"tema-2-2","url":"curso/mat/cuarto/10/tema-2-2","type":1,"enabled":true,"current":false},"tema-2-3":{"id":304,"name":"Tema 2","display_name":"tema-2-3","url":"curso/mat/cuarto/10/tema-2-3","type":1,"enabled":true,"current":false},"tema-2-4":{"id":305,"name":"Tema 2","display_name":"tema-2-4","url":"curso/mat/cuarto/10/tema-2-4","type":1,"enabled":true,"current":false},"tema-2-5":{"id":306,"name":"Tema 2","display_name":"tema-2-5","url":"curso/mat/cuarto/10/tema-2-5","type":1,"enabled":true,"current":false},"actividad-1-1":{"id":307,"name":"Actividad 1. Conceptualización","display_name":"actividad-1-1","url":"curso/mat/cuarto/10/actividad-1-1","type":2,"enabled":true,"current":false}}}}', 0, 0, NULL, NULL, '2014-11-27 22:50:40.189039', '2014-12-01 11:12:20.208457');


--
-- Name: user_progresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('user_progresses_id_seq', 307, true);


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

