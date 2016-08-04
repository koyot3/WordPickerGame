using Autofac;
using DragWordGame.Core.ApplicationService.Interfaces;
using DragWordGame.Service.ApplicationService.Services;

namespace DragWordGame.App_Start.AutofacRegister
{
    public class BusinessLogicRegistry : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<GameService>().As<IGameService>().SingleInstance();
            base.Load(builder);
        }
    }
}