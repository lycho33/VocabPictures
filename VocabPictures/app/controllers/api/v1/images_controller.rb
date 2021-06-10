class Api::V1::ImagesController < ApplicationController
    before_action :set_image, only: [:show, :update, :destroy]

    # GET /images
    def index
      @images = Image.all
  
      render json: @images, only: [:id, :category, :url], include: {
        vocabularies: {
          except: [:created_at, :updated_at]
        }
      }
    end
  
    # GET /images/1
    def show
      render json: @image, only: [:id, :category, :url], include: {
        vocabularies: {
          except: [:created_at, :updated_at]
        }
      }
    end
  
    # POST /images
    def create
      @image = Image.new(image_params)
    
      if @image.save
        render json: {
          status: 201,
          image: @image}, 
          status: :created
      else
        render json: @image.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /images/1
    def update
      if @image.update(image_params)
        render json: @image
      else
        render json: @image.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /images/1
    def destroy
      if @image.destroy
        render json: {message: "Successfully Deleted", image: @image}
      else 
        render json: {message: "Failed to Delete"}
      end
      
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_image
        @image = Image.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def image_params
        params.require(:image).permit(:id, :category, :url)
      end
end
