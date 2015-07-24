require 'test_helper'

class PlatformControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get list_data" do
    get :list_data
    assert_response :success
  end

end
