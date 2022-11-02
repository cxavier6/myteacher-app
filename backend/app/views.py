from rest_framework.views import APIView
from rest_framework.response import Response

class HomeApiView(APIView):
    def get(slef, request, format=None):
        return Response({"nome": "Camila Reis", "idade": 24}, status=200)