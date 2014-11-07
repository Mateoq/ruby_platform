--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

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

INSERT INTO course_data VALUES (1, 'Introducción', 2, '{"intro": "La <b>probabilidad</b> mide las posibilidades de cada uno de los resultados de un suceso o evento.<br /><br />La <b>estadística</b> es una herramienta que se utiliza para organizar información y encontrar conclusiones.<br /><br />En esta lección conocerás:<br /><br />- Cómo identificar eventos probables, cómo organizar e interpretar  información en tablas y gráficas, qué representa la media y cómo se calcula.", "standard":"\<ul\>\<li\>Conjeturo y pongo a prueba predicciones acerca de la posibilidad de ocurrencia de eventos.\</li\>\<li\>Represento datos usando tablas y gráficas (pictogramas, gráficas de barras, diagramas de líneas, diagramas circulares).\</li\>\<li\>Interpreto información presentada en tablas y gráficas (pictogramas, gráficas de barras, diagramas de líneas, diagramas circulares).\</li\>\</ul\>", "element":"\<ul\>\<li\>Evaluar la posibilidad de ocurrencia de eventos.\</li\>\<li\>Representar datos usando tablas y gráficas.\</li\>\<li\>Interpretar los datos presentados en tablas y gráficas.\</li\>\</ul\>"}', 0, 5, true, '2014-09-30 17:21:39.536721', '2014-10-27 14:58:20.779577', 'intro');
INSERT INTO course_data VALUES (2, 'Tema 1', 4, '{"lessonTitle":"Sucesos seguros, posibles e imposibles","footerBackground":"#6d5143","footerHeight":"212px","images":[{"src":"circo1.png","styles":"bottom: 0; left: 0;"},{"src":"circo2.png","styles":"bottom: 124px; right: 0;"},{"src":"andres_lat_izq.png","styles":"bottom: 74px; right: 48px;"}],"instruction":{"hasContent":false,"hasInstruction":true,"styles":"float: none; margin: 0 auto; height: 112px; width: 552px;","instructionStyles":"width: 552px; height: 112px; font-size: 12px;","instructionBg":"blue-green-background","instruction":"Andrés tomará un globo de cada grupo sin mirar su color. ¿Será azul?<br>Haz clic sobre cada grupo de globos para conocer el tipo de suceso."},"itemsImagesClass":"col-md-4","itemsImage":[{"image":"globos_azul.png","stylesImage":"float: right;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso seguro<\/span> porque ocurre siempre."},{"image":"globos_azul_amarillo.png","styles":"text-align: center;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso posible<\/span> porque puede ocurrir o no."},{"image":"globos_amarillo.png","stylesImage":"float: left;","content":"Tomar un globo azul de este grupo es un <span style=\"color: red;\">suceso imposible<\/span> porque nunca ocurre."}]}', 1, 5, true, '2014-10-29 16:31:00.793295', '2014-11-07 12:14:14.409598', 'theme1');
INSERT INTO course_data VALUES (3, 'Tema 2', 4, '{"lessonTitle":"Más probable, menos probable","footerBackground":"#6d5143","footerHeight":"250px","images":[{"src":"canasta_bolas.png","styles":"bottom: 80px; left: 30px;"}],"instruction":{"hasContent":true,"hasInstruction":true,"instructionBg":"yellow-background","styles":"width: 405px; float: right; margin-right: 100px;","contentStyles":"100%","contentHeaderStyles":"width:100%;","contentTitleStyles":"font-size: 21px;","instructionStyles":"width: 100%; height: 100px;","contentMainStyles":"height: 62px; font-size:12px;","title":"Más probable, menos probable","text":"En la canasta hay tres pelotas verdes y seis pelotas naranjas y Luis va a sacar una sin mirar. ¿De qué color es la pelota? <b>Analicemos<\/b>","instruction":"Haz clic sobre cada pelota para conocer el tipo de probabilidad.","contentIcon":"pr-icon-notebook"},"stylesImagesInfo":"bottom: 48px;","itemsImagesClass":"col-md-12","itemsImage":[{"image":"pelota_verde.png","styles":"height: 120px;","stylesImage":"position: absolute; right: 500px;","stylesPopover":"left: 220px; width: 465px; height: 47px; bottom: 26px; padding: 4px; padding-left: 82px;","stylesPopoverTitle":"position: absolute; left: 0; width: 80px; height: 100%; top: 0; padding: 13px; font-size: 16px; font-weight: 100; color: #FFF; background-color: #3AA835;","contentTitle":"Verde","content":"En la canasta hay menos pelotas verdes que naranjas, por lo tanto es <b>menos probable<\/b> sacar una pelota verde que una pelota naranja."},{"image":"pelota_naranja.png","styles":"height: 120px;","stylesImage":"position: absolute; right: 525px;","stylesPopover":"left: 244px; width: 465px; height: 47px; bottom: 51px; padding: 4px; padding-left: 82px;","stylesPopoverTitle":"position: absolute; left: 0; width: 80px; height: 100%; top: 0; padding: 13px; font-size: 16px; font-weight: 100; color: #FFF; background-color: #ED7D32;","contentTitle":"Naranja","content":"En la canasta hay más pelotas naranjas que verdes, por lo tanto es <b>más probable<\/b> sacar una pelota naranja que una pelota verde."}]}', 1, 5, true, '2014-11-07 09:57:27.884471', '2014-11-07 17:58:52.213568', 'theme2');


--
-- Name: course_data_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('course_data_id_seq', 3, true);


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


--
-- Name: templates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('templates_id_seq', 4, true);


--
-- Data for Name: user_progresses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO user_progresses VALUES (96, 'mat_04_00', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 95, NULL, NULL, '2014-10-30 23:00:48.144472', '2014-10-30 23:00:48.144472');
INSERT INTO user_progresses VALUES (97, 'mat_04_01', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 95, NULL, NULL, '2014-10-30 23:00:48.163886', '2014-10-30 23:00:48.163886');
INSERT INTO user_progresses VALUES (98, 'mat_04_02', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 95, NULL, NULL, '2014-10-30 23:00:48.178248', '2014-10-30 23:00:48.178248');
INSERT INTO user_progresses VALUES (99, 'mat_04_03', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 95, NULL, NULL, '2014-10-30 23:00:48.197652', '2014-10-30 23:00:48.197652');
INSERT INTO user_progresses VALUES (95, 'mat_04', NULL, 'mjquintero@ucn.edu.co', 4, '{"click_here":true,"click_here_menu":true,"progress":[null,null,null,{"2":{"id":5,"link":"curso/mat/cuarto/10","enabled":true,"current":true}}],"lesson_progress":{"mat410":{"intro":{"id":101,"name":"Introducción","display_name":"intro","url":"curso/mat/cuarto/10/intro","enabled":true,"current":true},"theme1":{"id":102,"name":"Tema 1","display_name":"theme1","url":"curso/mat/cuarto/10/theme1","enabled":true,"current":false},"theme2":{"id":103,"name":"Tema 2","display_name":"theme2","url":"curso/mat/cuarto/10/theme2","enabled":true,"current":false}}}}', 0, 0, NULL, NULL, '2014-10-30 23:00:48.047653', '2014-11-07 16:29:59.549015');
INSERT INTO user_progresses VALUES (101, 'mat410_intro', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 0, 100, true, true, '2014-10-30 23:04:51.09654', '2014-10-30 23:04:51.09654');
INSERT INTO user_progresses VALUES (102, 'mat410_theme1', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 100, true, false, '2014-10-30 23:04:51.128848', '2014-11-04 10:50:15.695475');
INSERT INTO user_progresses VALUES (100, 'mat_04_03_02', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 2, 99, true, true, '2014-10-30 23:00:48.214768', '2014-11-07 15:58:03.304163');
INSERT INTO user_progresses VALUES (103, 'mat410_theme2', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 100, true, false, '2014-11-07 15:24:05.035482', '2014-11-07 10:24:58.739458');


--
-- Name: user_progresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('user_progresses_id_seq', 103, true);


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

