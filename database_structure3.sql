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

ALTER TABLE ONLY user_progresses ALTER COLUMN id SET DEFAULT nextval('user_progresses_id_seq'::regclass);


--
-- Data for Name: user_progresses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO user_progresses VALUES (294, 'mat_04_00', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 293, NULL, NULL, '2014-11-27 22:50:40.201681', '2014-11-27 22:50:40.201681');
INSERT INTO user_progresses VALUES (295, 'mat_04_01', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 293, NULL, NULL, '2014-11-27 22:50:40.224869', '2014-11-27 22:50:40.224869');
INSERT INTO user_progresses VALUES (296, 'mat_04_02', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 293, NULL, NULL, '2014-11-27 22:50:40.247701', '2014-11-27 22:50:40.247701');
INSERT INTO user_progresses VALUES (297, 'mat_04_03', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 1, 293, NULL, NULL, '2014-11-27 22:50:40.271876', '2014-11-27 22:50:40.271876');
INSERT INTO user_progresses VALUES (309, 'mat410_actividad-1-3', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 4, 298, true, false, '2014-12-04 14:31:46.071997', '2014-12-04 09:32:31.391336');
INSERT INTO user_progresses VALUES (299, 'mat410_intro', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, true, '2014-11-27 22:50:54.215669', '2014-11-27 22:50:54.215669');
INSERT INTO user_progresses VALUES (300, 'mat410_tema-1-1', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, true, '2014-11-27 22:50:54.244726', '2014-11-27 22:50:54.244726');
INSERT INTO user_progresses VALUES (308, 'mat410_actividad-1-2', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 4, 298, true, false, '2014-12-03 16:45:06.89545', '2014-12-03 11:45:48.104566');
INSERT INTO user_progresses VALUES (301, 'mat410_tema-1-2', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, false, '2014-11-27 22:50:54.259668', '2014-12-01 11:09:46.093987');
INSERT INTO user_progresses VALUES (302, 'mat410_tema-2-1', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, false, '2014-11-27 22:50:54.278411', '2014-12-01 11:09:58.896882');
INSERT INTO user_progresses VALUES (303, 'mat410_tema-2-2', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, false, '2014-11-27 22:50:54.29692', '2014-12-01 11:10:18.775494');
INSERT INTO user_progresses VALUES (304, 'mat410_tema-2-3', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, false, '2014-11-27 22:50:54.320587', '2014-12-01 11:10:35.660827');
INSERT INTO user_progresses VALUES (305, 'mat410_tema-2-4', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, false, '2014-11-27 22:50:54.338794', '2014-12-01 11:10:44.123919');
INSERT INTO user_progresses VALUES (306, 'mat410_tema-2-5', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 3, 298, true, false, '2014-11-27 22:50:54.364608', '2014-12-01 11:11:02.83658');
INSERT INTO user_progresses VALUES (307, 'mat410_actividad-1-1', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 4, 298, true, false, '2014-11-27 22:50:54.383215', '2014-12-01 11:11:22.739381');
INSERT INTO user_progresses VALUES (298, 'mat_04_03_02', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 2, 297, true, true, '2014-11-27 22:50:40.288902', '2014-12-17 15:38:50.653058');
INSERT INTO user_progresses VALUES (310, 'mat410_actividad-2-1', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 4, 298, true, false, '2014-12-05 05:54:29.413683', '2014-12-05 00:55:03.335614');
INSERT INTO user_progresses VALUES (311, 'mat410_actividad-3-1', NULL, 'mjquintero@ucn.edu.co', 4, NULL, 4, 298, true, false, '2014-12-07 20:01:59.294484', '2014-12-07 15:03:42.089797');
INSERT INTO user_progresses VALUES (293, 'mat_04', NULL, 'mjquintero@ucn.edu.co', 4, '{"click_here":true,"click_here_menu":true,"progress":[null,null,null,{"2":{"id":5,"link":"curso/mat/cuarto/10","enabled":true,"current":true}}],"lesson_progress":{"mat410":{"intro":{"id":299,"name":"Introducción","display_name":"intro","url":"curso/mat/cuarto/10/intro","type":0,"enabled":true,"current":true},"tema-1-1":{"id":300,"name":"Tema 1","display_name":"tema-1-1","url":"curso/mat/cuarto/10/tema-1-1","type":1,"enabled":true,"current":true},"tema-1-2":{"id":301,"name":"Tema 1","display_name":"tema-1-2","url":"curso/mat/cuarto/10/tema-1-2","type":1,"enabled":true,"current":false},"tema-2-1":{"id":302,"name":"Tema 2","display_name":"tema-2-1","url":"curso/mat/cuarto/10/tema-2-1","type":1,"enabled":true,"current":false},"tema-2-2":{"id":303,"name":"Tema 2","display_name":"tema-2-2","url":"curso/mat/cuarto/10/tema-2-2","type":1,"enabled":true,"current":false},"tema-2-3":{"id":304,"name":"Tema 2","display_name":"tema-2-3","url":"curso/mat/cuarto/10/tema-2-3","type":1,"enabled":true,"current":false},"tema-2-4":{"id":305,"name":"Tema 2","display_name":"tema-2-4","url":"curso/mat/cuarto/10/tema-2-4","type":1,"enabled":true,"current":false},"tema-2-5":{"id":306,"name":"Tema 2","display_name":"tema-2-5","url":"curso/mat/cuarto/10/tema-2-5","type":1,"enabled":true,"current":false},"actividad-1-1":{"id":307,"name":"Actividad 1. Conceptualización","display_name":"actividad-1-1","url":"curso/mat/cuarto/10/actividad-1-1","type":2,"enabled":true,"current":false},"actividad-1-2":{"id":308,"name":"Actividad 2. Conceptualización","display_name":"actividad-1-2","url":"curso/mat/cuarto/10/actividad-1-2","type":2,"enabled":true,"current":false},"actividad-1-3":{"id":309,"name":"Actividad 3. Conceptualización","display_name":"actividad-1-3","url":"curso/mat/cuarto/10/actividad-1-3","type":2,"enabled":true,"current":false},"actividad-2-1":{"id":310,"name":"Actividad 1. Dinamización","display_name":"actividad-2-1","url":"curso/mat/cuarto/10/actividad-2-1","type":2,"enabled":true,"current":false},"actividad-3-1":{"id":311,"name":"Actividad 1. Socialización","display_name":"actividad-3-1","url":"curso/mat/cuarto/10/actividad-3-1","type":2,"enabled":true,"current":false}}}}', 0, 0, NULL, NULL, '2014-11-27 22:50:40.189039', '2014-12-18 23:58:52.944811');


--
-- Name: user_progresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('user_progresses_id_seq', 311, true);


--
-- Name: user_progresses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY user_progresses
    ADD CONSTRAINT user_progresses_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

