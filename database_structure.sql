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
    url_name character varying(255) NOT NULL
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

INSERT INTO course_data VALUES (2, 'Tema 1-1', 4, '{"lessonTitle":"Sucesos seguros, posibles e imposibles","footerBackground":"#6d5143","footerHeight":"212px","images":[{"src":"circo1.png","styles":"bottom: 0; left: 0;"},{"src":"circo2.png","styles":"bottom: 124px; right: 0;"},{"src":"andres_lat_izq.png","styles":"bottom: 74px; right: 48px;"}],"instruction":{"hasContent":false,"hasInstruction":true,"styles":"float: none; margin: 0 auto; height: 112px; width: 552px;","instructionStyles":"width: 552px; height: 112px; font-size: 12px;","instructionBg":"blue-green-background","instruction":"Andrés tomará un globo de cada grupo sin mirar su color. ¿Será azul?<br>Haz clic sobre cada grupo de globos para conocer el tipo de suceso."},"itemsImagesClass":"col-md-4","itemsImage":[{"image":"globos_azul.png","stylesImage":"float: right;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso seguro<\/span> porque ocurre siempre."},{"image":"globos_azul_amarillo.png","styles":"text-align: center;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso posible<\/span> porque puede ocurrir o no."},{"image":"globos_amarillo.png","stylesImage":"float: left;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso imposible<\/span> porque nunca ocurre."}]}', 1, 5, true, '2014-10-29 16:31:00.793295', '2014-11-10 10:12:47.051252', 'theme-1-1');
INSERT INTO course_data VALUES (7, 'Tema 2-4', 7, '{"lessonTitle":"Pictogramas","footerBackground":"#4D869F","footerHeight":"163px","images":[{"src":"carpa_circo.png","styles":"bottom: 100px; right: 10px;"}],"content":{"hasContent":true,"hasInstruction":false,"styles":"width: 62%;","contentStyles":"width: 100%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px; height: 47px;","stylesContentIcon":"height: 47px;","contentMainStyles":"height: 62px; font-size:12px; width: 100%; padding-top: 12px;","title":"Pictogramas","text":"En un pictograma se utiliza una figura para representar cierta cantidad de datos. En este caso, la figura <span class=\"pr-icon pr-icon-tiny-people dark\" style=\"margin-bottom: -6px;\"></span> representa 100 personas. Observa el siguiente ejemplo.","contentIcon":"pr-icon-notebook"},"stylesInstructionRow":"margin-top: 10px","stylesInstructionCol":"width: 100%; padding: 0","instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 40%;","instructionStyles":"width: 100%; height: 100px;","instruction":"Haz clic sobre cada día de la semana para visualizar el pictograma correspondiente."},"stylesMainContent":"height: 40%;"}', 1, 5, true, '2014-11-20 17:02:43.601155', '2014-11-21 18:03:14.927699', 'theme-2-4');
INSERT INTO course_data VALUES (1, 'Introducción', 2, '{"intro": "La <b>probabilidad</b> mide las posibilidades de cada uno de los resultados de un suceso o evento.<br /><br />La <b>estadística</b> es una herramienta que se utiliza para organizar información y encontrar conclusiones.<br /><br />En esta lección conocerás:<br /><br />- Cómo identificar eventos probables, cómo organizar e interpretar  información en tablas y gráficas, qué representa la media y cómo se calcula.", "standard":"\<ul\>\<li\>Conjeturo y pongo a prueba predicciones acerca de la posibilidad de ocurrencia de eventos.\</li\>\<li\>Represento datos usando tablas y gráficas (pictogramas, gráficas de barras, diagramas de líneas, diagramas circulares).\</li\>\<li\>Interpreto información presentada en tablas y gráficas (pictogramas, gráficas de barras, diagramas de líneas, diagramas circulares).\</li\>\</ul\>", "element":"\<ul\>\<li\>Evaluar la posibilidad de ocurrencia de eventos.\</li\>\<li\>Representar datos usando tablas y gráficas.\</li\>\<li\>Interpretar los datos presentados en tablas y gráficas.\</li\>\</ul\>"}', 0, 5, true, '2014-09-30 17:21:39.536721', '2014-10-27 14:58:20.779577', 'intro');
INSERT INTO course_data VALUES (3, 'Tema 1-2', 4, '{"lessonTitle":"Más probable, menos probable","footerBackground":"#6d5143","footerHeight":"250px","images":[{"src":"canasta_bolas.png","styles":"bottom: 80px; left: 30px;"}],"instruction":{"hasContent":true,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 405px; float: right; margin-right: 200px;","contentStyles":"100%","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px;","instructionStyles":"width: 100%; height: 100px;","contentMainStyles":"height: 62px; font-size:12px;","title":"Más probable, menos probable","text":"En la canasta hay tres pelotas verdes y seis pelotas naranjas y Luis va a sacar una sin mirar. ¿De qué color es la pelota? <b>Analicemos</b>","instruction":"Haz clic sobre cada una de las pelotas, ubicadas en la parte inferior, para conocer el tipo de probabilidad.","contentIcon":"pr-icon-notebook"},"stylesImagesInfo":"bottom: 48px;","itemsImagesClass":"col-md-12","itemsImage":[{"image":"pelota_verde.png","styles":"height: 120px;","stylesImage":"position: absolute; right: 500px;","stylesPopover":"left: 220px; width: 468px; height: 47px; bottom: 26px; padding: 4px; padding-left: 82px;","stylesPopoverTitle":"position: absolute; left: 0; width: 80px; height: 100%; top: 0; padding: 13px; font-size: 16px; font-weight: 100; color: #FFF; background-color: #3AA835;","contentTitle":"Verde","content":"En la canasta hay menos pelotas verdes que naranjas, por lo tanto es <b>menos probable</b> sacar una pelota verde que una pelota naranja."},{"image":"pelota_naranja.png","styles":"height: 120px;","stylesImage":"position: absolute; right: 525px;","stylesPopover":"left: 244px; width: 468px; height: 47px; bottom: 51px; padding: 4px; padding-left: 82px;","stylesPopoverTitle":"position: absolute; left: 0; width: 80px; height: 100%; top: 0; padding: 13px; font-size: 16px; font-weight: 100; color: #FFF; background-color: #ED7D32;","contentTitle":"Naranja","content":"En la canasta hay más pelotas naranjas que verdes, por lo tanto es <b>más probable</b> sacar una pelota naranja que una pelota verde."}]}', 1, 5, true, '2014-11-07 09:57:27.884471', '2014-11-18 17:53:26.264082', 'theme-1-2');
INSERT INTO course_data VALUES (4, 'Tema 2-1', 5, '{"lessonTitle":"Organizando datos","footerBackground":"#4D869F","footerHeight":"214px","images":[{"src":"puesto_frutas.png","styles":"left: 0; bottom: 10px;"},{"src":"pesa_y_frutas.png","styles":"right: 70px; bottom: 80px;"}],"stylesCont":"padding-left: 170px;","stylesTableCont":"padding-right: 170px;","content":{"hasContent":true,"hasInstruction":false,"title":"Organizando datos","text":"Carlos quiere organizar en las siguiente tabla las frutas que comió su familia durante  el fin de semana.<br><br><b>Sábado</b>: tres peras, dos bananos, cinco manzanas y cuatro mandarinas.<br><br><b>Domingo</b>: una pera, seis bananos, cuatro manzanas y tres mandarinas.","contentIcon":"pr-icon-notebook","contentHeaderStyles":"width: 100%;","contentTitleStyles":"font-size: 20px;","contentMainStyles":"width: 100%;"},"instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","instructionStyles":"height: 102px;","instruction":"Ayuda a Carlos escribiendo la información en la tabla."},"pattern":"num","tableTitles":[{"title":"Fruta","secondTitle":"Día"},{"title":"Sábado"},{"title":"Domingo"},{"title":"Total"}],"tableItems":[[{"text":"Manzana"},{"answer":5},{"answer":4},{"answer":9}],[{"text":"Mandarina"},{"answer":4},{"answer":3},{"answer":7}],[{"text":"Banano"},{"answer":2},{"answer":6},{"answer":8}],[{"text":"Pera"},{"answer":3},{"answer":1},{"answer":4}],[{"text":"Total"},{"answer":14},{"answer":14},{"answer":28}]]}', 1, 5, true, '2014-11-10 12:37:24.089205', '2014-11-18 16:38:08.054481', 'theme-2-1');
INSERT INTO course_data VALUES (5, 'Tema 2-2', 6, '{"lessonTitle":"Interpretando datos","footerBackground":"#4D869F","footerHeight":"214px","images":[{"src":"puesto_frutas.png","styles":"left: 0; bottom: 10px;"},{"src":"carlos_frente.png","styles":"right: 90px; bottom: 30px;"}],"pattern":"word","stylesInstructionRow":"height: 102px;","stylesInstructionContainer":"float: none; margin: auto; height: 100%; left: 100px;","instruction":{"hasContent":false,"hasInstruction":true,"instructionBg":"blue-green-background","instructionStyles":"height: 102px; width: 100%;","instruction":"De acuerdo a la tabla anterior, ayuda a Carlos a contestar las siguientes preguntas escribiendo en los espacios correspondientes."},"stylesActionRow":"height: 302px;","stylesActionCol":"width: 429px; float: none; margin: auto; height: 100%; left: 160px;","items":[{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuántas frutas se comieron el sábado?</b>","answer":"14"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuál fue la fruta que más comió su familia durante el fin de semana?</b>","answer":"Manzana"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuántas frutas se comieron en los dos días?</b>","answer":"28"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuál fruta comió menos su familia durante el fin de semana?</b>","answer":"Pera"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Cuántos bananos se comieron el día sábado?</b>","answer":"2"},{"stylesRow":"height: 50px;","stylesText":"width: 266px;","stylesInputItem":"height: 50px; width: 133px;","text":"<b>¿Qué representa el número 7 en la tabla? <span class=\"text-right\">Total de:</span></b>","answer":"Mandarinas"}],"slideScreenOn":true,"stylesScreenContent":"display: table; height: 80%; width: 100%; margin: auto;","stylesScreenImage":"width: 373px; display: table-cell; vertical-align: middle; margin: auto; padding: 0; float: none;","slideScreenTitle":"Tabla informativa","slideScreenImage":"tabla_frutas.png","slideScreenAlt":"Tabla con informacón del tema 2-1"}', 1, 5, true, '2014-11-12 11:40:57.285378', '2014-11-19 17:34:27.376858', 'theme-2-2');
INSERT INTO course_data VALUES (6, 'Tema 2-3', 7, '{"lessonTitle":"Gráfica de barras","footerBackground":"#4D869F","footerHeight":"213px","images":[{"src":"daniel_frente.png","styles":"bottom: 80px; left: 80px;"},{"src":"elemen_deporte.png","styles":"bottom: 56px; left: 248px;"}],"stylesInstructionCol":"float: none; position: relative; margin: auto; height: 119px; left: 70px;","instruction":{"hasContent":true,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 100%;","contentStyles":"width: 50%;","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px;","instructionStyles":"width: 50%; height: 118px;","contentMainStyles":"height: 62px; font-size:12px;","title":"Gráfica de barras","text":"Daniel preguntó a sus amigos cuál es su deporte favorito y organizó la información en una gráfica.","instruction":"Haz clic sobre cada deporte para visualizar su gráfica.","contentIcon":"pr-icon-notebook"},"stylesMainContent":"width: 686px; left: 70px;","stylesTableContainer":"width: 170px; float: left;","tableTitles":[{"title":"Deportes"},{"title":"Niños y niñas"}],"tableItems":[[{"text":"Natación"},{"text":"4"}],[{"text":"Fútbol"},{"text":"7"}],[{"text":"Baloncesto"},{"text":"3"}],[{"text":"Voleibol"},{"text":"2"}],[{"text":"Ciclismo"},{"text":"3"}]],"stylesGraphicContainer":"width: 450px; float: right;","method":0,"graphicData":{"width":450,"height":320,"atlasMap":"deporte_favorito_tabla.png","buttons":[{"x":110,"y":285,"btn":"natacion"},{"x":174,"y":285,"btn":"futbol"},{"x":232,"y":285,"btn":"baloncest"},{"x":307,"y":285,"btn":"voleibol"},{"x":365,"y":285,"btn":"ciclismo"}],"bars":[{"x":142,"y":272,"grafica":"g1"},{"x":200,"y":272,"grafica":"g2"},{"x":265,"y":272,"grafica":"g3"},{"x":331,"y":272,"grafica":"g4"},{"x":395,"y":272,"grafica":"g5"}],"atlasJson":"{\"frames\":[{\"filename\":\"ciclismo\",\"frame\":{\"x\":137,\"y\":407,\"w\":58,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":58,\"h\":17},\"sourceSize\":{\"w\":58,\"h\":17}},{\"filename\":\"futbol\",\"frame\":{\"x\":0,\"y\":371,\"w\":52,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":52,\"h\":17},\"sourceSize\":{\"w\":52,\"h\":17}},{\"filename\":\"baloncest\",\"frame\":{\"x\":25,\"y\":389,\"w\":68,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":68,\"h\":17},\"sourceSize\":{\"w\":68,\"h\":17}},{\"filename\":\"bg\",\"frame\":{\"x\":0,\"y\":0,\"w\":506,\"h\":370},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":506,\"h\":370},\"sourceSize\":{\"w\":506,\"h\":370}},{\"filename\":\"g5\",\"frame\":{\"x\":507,\"y\":273,\"w\":24,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":74},\"sourceSize\":{\"w\":24,\"h\":74}},{\"filename\":\"g1\",\"frame\":{\"x\":507,\"y\":0,\"w\":24,\"h\":99},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":99},\"sourceSize\":{\"w\":24,\"h\":99}},{\"filename\":\"g2\",\"frame\":{\"x\":507,\"y\":100,\"w\":24,\"h\":172},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":172},\"sourceSize\":{\"w\":24,\"h\":172}},{\"filename\":\"g3\",\"frame\":{\"x\":507,\"y\":348,\"w\":24,\"h\":74},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":74},\"sourceSize\":{\"w\":24,\"h\":74}},{\"filename\":\"g4\",\"frame\":{\"x\":0,\"y\":389,\"w\":24,\"h\":49},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":24,\"h\":49},\"sourceSize\":{\"w\":24,\"h\":49}},{\"filename\":\"voleibol\",\"frame\":{\"x\":25,\"y\":407,\"w\":52,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":52,\"h\":17},\"sourceSize\":{\"w\":52,\"h\":17}},{\"filename\":\"natacion\",\"frame\":{\"x\":78,\"y\":407,\"w\":58,\"h\":17},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":58,\"h\":17},\"sourceSize\":{\"w\":58,\"h\":17}}]}"}}', 1, 5, true, '2014-11-19 09:40:29.86523', '2014-11-21 12:55:26.762551', 'theme-2-3');


--
-- Name: course_data_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('course_data_id_seq', 7, true);


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
INSERT INTO templates VALUES (3, 'Drag n'' Drop', 'drag-drop', 'Actividad de arrastre.', 2, true, '2014-10-28 08:59:24.986227', '2014-10-28 08:59:52.733165');
INSERT INTO templates VALUES (4, 'Images Info Popover', 'images-info-popover', 'Directive que lista una serie de imagenes que al darle clic aparece un cuadro de información.', 1, true, '2014-10-29 16:28:03.530421', '2014-10-29 16:28:03.530421');
INSERT INTO templates VALUES (5, 'Form table', 'table-form', 'Esta plantilla incluye una tabla que contiene un formulario, también posee un contendor para conceptos de la lección y su instrucción-', 1, true, '2014-11-10 09:59:36.929535', '2014-11-10 15:22:07.100074');
INSERT INTO templates VALUES (6, 'Text Inputs Form', 'text-input-form', 'Esta directiva incluye una instrucción y un contenedor con una lista de texto y respuesta.', 1, true, '2014-11-12 11:39:43.516941', '2014-11-12 11:39:43.516941');
INSERT INTO templates VALUES (7, 'Graphic and Table', 'graphic-table', 'Esta plantilla incluye opción de instrucción y contenido, además de una tabla de datos para la gráfica animada. También incluye un cuadro de texto extra para anidar información adicional a la gráfica.', 1, true, '2014-11-19 09:26:15.736321', '2014-11-19 09:26:15.736321');


--
-- Name: templates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('templates_id_seq', 7, true);


--
-- Data for Name: user_progresses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO user_progresses VALUES (114, 'mat_04', NULL, 'mjquintero@ucn.edu.co', 4, '{"click_here":true,"click_here_menu":true,"progress":[null,null,null,{"2":{"id":5,"link":"curso/mat/cuarto/10","enabled":true,"current":false}}],"lesson_progress":{"mat410":{"intro":{"id":120,"name":"Introducción","display_name":"intro","url":"curso/mat/cuarto/10/intro","enabled":true,"current":true},"theme-1-1":{"id":121,"name":"Tema 1-1","display_name":"theme-1-1","url":"curso/mat/cuarto/10/theme-1-1","enabled":true,"current":false},"theme-1-2":{"id":122,"name":"Tema 1-2","display_name":"theme-1-2","url":"curso/mat/cuarto/10/theme-1-2","enabled":true,"current":false},"theme-2-1":{"id":123,"name":"Tema 2-1","display_name":"theme-2-1","url":"curso/mat/cuarto/10/theme-2-1","enabled":true,"current":false},"theme-2-2":{"id":124,"name":"Tema 2-2","display_name":"theme-2-2","url":"curso/mat/cuarto/10/theme-2-2","enabled":true,"current":false},"theme-2-3":{"id":125,"name":"Tema 2-3","display_name":"theme-2-3","url":"curso/mat/cuarto/10/theme-2-3","enabled":true,"current":false},"theme-2-4":{"id":126,"name":"Tema 2-4","display_name":"theme-2-4","url":"curso/mat/cuarto/10/theme-2-4","enabled":true,"current":false}}}}', 0, 0, NULL, NULL, '2014-11-10 17:53:35.019283', '2014-11-21 19:50:30.744659');
INSERT INTO user_progresses VALUES (119, 'mat_04_03_02', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 2, 118, true, true, '2014-11-10 17:53:35.242747', '2014-11-21 19:51:06.100749');
INSERT INTO user_progresses VALUES (115, 'mat_04_00', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 114, NULL, NULL, '2014-11-10 17:53:35.145054', '2014-11-10 17:53:35.145054');
INSERT INTO user_progresses VALUES (116, 'mat_04_01', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 114, NULL, NULL, '2014-11-10 17:53:35.168059', '2014-11-10 17:53:35.168059');
INSERT INTO user_progresses VALUES (117, 'mat_04_02', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 114, NULL, NULL, '2014-11-10 17:53:35.192655', '2014-11-10 17:53:35.192655');
INSERT INTO user_progresses VALUES (118, 'mat_04_03', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 114, NULL, NULL, '2014-11-10 17:53:35.217478', '2014-11-10 17:53:35.217478');
INSERT INTO user_progresses VALUES (125, 'mat410_theme-2-3', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 119, true, false, '2014-11-19 14:55:58.81858', '2014-11-19 10:02:24.530386');
INSERT INTO user_progresses VALUES (126, 'mat410_theme-2-4', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 119, true, false, '2014-11-20 22:03:00.843036', '2014-11-21 12:40:53.734506');
INSERT INTO user_progresses VALUES (121, 'mat410_theme-1-1', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 119, true, false, '2014-11-10 17:54:08.719371', '2014-11-12 15:26:31.011494');
INSERT INTO user_progresses VALUES (123, 'mat410_theme-2-1', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 119, true, false, '2014-11-10 17:54:08.893548', '2014-11-12 15:26:31.011494');
INSERT INTO user_progresses VALUES (122, 'mat410_theme-1-2', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 119, true, false, '2014-11-10 17:54:08.855196', '2014-11-12 15:26:31.011494');
INSERT INTO user_progresses VALUES (124, 'mat410_theme-2-2', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 119, true, false, '2014-11-12 16:41:24.746035', '2014-11-12 15:26:31.011494');
INSERT INTO user_progresses VALUES (120, 'mat410_intro', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 119, true, true, '2014-11-10 17:54:08.683012', '2014-11-12 15:26:31.011494');


--
-- Name: user_progresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('user_progresses_id_seq', 126, true);


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

