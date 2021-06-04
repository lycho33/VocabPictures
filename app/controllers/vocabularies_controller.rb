class VocabulariesController < ApplicationController
  before_action :set_vocabulary, only: [:show, :update, :destroy]

  # GET /vocabularies
  def index
    @vocabularies = Vocabulary.all

    render json: @vocabularies
  end

  # GET /vocabularies/1
  def show
    render json: @vocabulary
  end

  # POST /vocabularies
  def create
    @vocabulary = Vocabulary.new(vocabulary_params)

    if @vocabulary.save
      render json: @vocabulary, status: :created, location: @vocabulary
    else
      render json: @vocabulary.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /vocabularies/1
  def update
    if @vocabulary.update(vocabulary_params)
      render json: @vocabulary
    else
      render json: @vocabulary.errors, status: :unprocessable_entity
    end
  end

  # DELETE /vocabularies/1
  def destroy
    @vocabulary.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vocabulary
      @vocabulary = Vocabulary.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def vocabulary_params
      params.require(:vocabulary).permit(:word, :description, :trigger, :picture_id)
    end
end
