require "test_helper"

class VocabulariesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @vocabulary = vocabularies(:one)
  end

  test "should get index" do
    get vocabularies_url, as: :json
    assert_response :success
  end

  test "should create vocabulary" do
    assert_difference('Vocabulary.count') do
      post vocabularies_url, params: { vocabulary: { description: @vocabulary.description, picture_id: @vocabulary.picture_id, trigger: @vocabulary.trigger, word: @vocabulary.word } }, as: :json
    end

    assert_response 201
  end

  test "should show vocabulary" do
    get vocabulary_url(@vocabulary), as: :json
    assert_response :success
  end

  test "should update vocabulary" do
    patch vocabulary_url(@vocabulary), params: { vocabulary: { description: @vocabulary.description, picture_id: @vocabulary.picture_id, trigger: @vocabulary.trigger, word: @vocabulary.word } }, as: :json
    assert_response 200
  end

  test "should destroy vocabulary" do
    assert_difference('Vocabulary.count', -1) do
      delete vocabulary_url(@vocabulary), as: :json
    end

    assert_response 204
  end
end
