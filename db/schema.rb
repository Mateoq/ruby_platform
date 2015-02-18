# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150107105512) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "course_data", force: :cascade do |t|
    t.string   "name",                       null: false
    t.integer  "template_id",                null: false
    t.text     "data"
    t.integer  "pr_type",     default: 0
    t.string   "url_name",                   null: false
    t.integer  "course_id",                  null: false
    t.boolean  "enabled",     default: true
    t.integer  "order",                      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "courses", force: :cascade do |t|
    t.string   "name",                       null: false
    t.integer  "pr_type",     default: 0,    null: false
    t.string   "url"
    t.text     "metadata"
    t.integer  "parent_id",   default: 0
    t.integer  "template_id", default: 0
    t.boolean  "enabled",     default: true
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "grades_schemes", force: :cascade do |t|
    t.string   "name",                      null: false
    t.integer  "stage",                     null: false
    t.text     "scheme",                    null: false
    t.boolean  "enabled",    default: true
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "templates", force: :cascade do |t|
    t.string   "name",                       null: false
    t.string   "tag",                        null: false
    t.text     "description"
    t.integer  "pr_type",     default: 0,    null: false
    t.boolean  "enabled",     default: true
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_progresses", force: :cascade do |t|
    t.string   "name",                      null: false
    t.float    "grade"
    t.string   "user_id",                   null: false
    t.integer  "current_grade",             null: false
    t.text     "metadata"
    t.integer  "pr_type",       default: 0
    t.integer  "parent_id",     default: 0
    t.boolean  "enabled"
    t.boolean  "current"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
