class Course < ActiveRecord::Base
  has_one(:course_data)
  has_many :course_registrations
  has_many :users, through: :course_registrations

  attr_accessor :name, :pr_type, :metadata, :enabled
  validates :name, :pr_type, :enabled, presence: true
  validates :name, length: { maximum: 50 },
                   uniqueness: true
  validates :pr_type, numericality: true

  def self.grades
    { primero: '1', segundo: '2', tercero: '3', cuarto: '4', quinto: '5' }
  end

	def self.classes
		{
			art: "Artística",
			edf: "Educación Física",
			eng: "English",			
			esp: "Lengua Castellana",
			eti: "Ética y Valores",
			mat: "Matemáticas",
			rel: "Religión",
			sci: "Ciencias Naturales",
			soc: "Ciencias Sociales", 
			tic: "Tecnología e Informática"
		}		
	end

  def self.course_types
    { class: 0, course: 1, lesson: 2, other: 3 }
  end

  def get_by_type_and_name(name, type)
    Course.find_by(name: name, pr_type: type)
  end

  def parent
    @parent ||= []
    @parent[id] ||= Course.find(parent_id)
    @parent[id]
  end

  def childs
    @childs ||= []
    @childs[id] ||= Course.where(parent_id: id)
    @childs[id]
  end
end
