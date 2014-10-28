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


--
-- Name: course_data_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('course_data_id_seq', 1, true);


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


--
-- Name: templates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('templates_id_seq', 3, true);


--
-- Data for Name: user_progresses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO user_progresses VALUES (68, 'mat_04_03_02', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 2, 67, true, false, '2014-10-28 19:41:37.178003', '2014-10-28 22:03:56.794142');
INSERT INTO user_progresses VALUES (64, 'mat_04_00', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 63, NULL, NULL, '2014-10-28 19:41:37.009448', '2014-10-28 19:41:37.009448');
INSERT INTO user_progresses VALUES (65, 'mat_04_01', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 63, NULL, NULL, '2014-10-28 19:41:37.041417', '2014-10-28 19:41:37.041417');
INSERT INTO user_progresses VALUES (66, 'mat_04_02', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 63, NULL, NULL, '2014-10-28 19:41:37.076226', '2014-10-28 19:41:37.076226');
INSERT INTO user_progresses VALUES (67, 'mat_04_03', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 63, NULL, NULL, '2014-10-28 19:41:37.139228', '2014-10-28 19:41:37.139228');
INSERT INTO user_progresses VALUES (69, 'mat410_intro', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 0, 68, true, true, '2014-10-28 20:34:04.289513', '2014-10-28 20:34:04.289513');
INSERT INTO user_progresses VALUES (63, 'mat_04', NULL, 'mjquintero@ucn.edu.co', 4, '{"click_here":true,"click_here_menu":true,"progress":[null,null,null,{"2":{"id":5,"link":"curso/mat/cuarto/10","enabled":true,"current":true}}],"lesson_progress":{"mat410":{"intro":{"id":69,"name":"Introducción","display_name":"intro","url":"curso/mat/cuarto/10/intro","enabled":true,"current":true}}}}', 0, 0, NULL, NULL, '2014-10-28 19:41:36.841814', '2014-10-28 20:55:16.54333');


--
-- Name: user_progresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('user_progresses_id_seq', 69, true);


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

