﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.DokumentooborotKR
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Хр док.
    /// </summary>
    // *** Start programmer edit section *** (ХрДок CustomAttributes)

    // *** End programmer edit section *** (ХрДок CustomAttributes)
    [AutoAltered()]
    [Caption("Хранение документов")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ХрДокE", new string[] {
            "ДатаСохранения as \'Дата сохранения\'"})]
    [AssociatedDetailViewAttribute("ХрДокE", "ТЧСоздДок", "ТЧСоздДокE", true, "", "Созданные документы", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("ХрДокE", "ТЧУтвержДок", "ТЧУтвержДокE", true, "", "Рассмотренные документы", true, new string[] {
            ""})]
    [View("ХрДокL", new string[] {
            "ДатаСохранения as \'Дата сохранения\'"})]
    public class ХрДок : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаСохранения = System.DateTime.Now;
        
        private IIS.DokumentooborotKR.DetailArrayOfТЧСоздДок fТЧСоздДок;
        
        private IIS.DokumentooborotKR.DetailArrayOfТЧУтвержДок fТЧУтвержДок;
        
        // *** Start programmer edit section *** (ХрДок CustomMembers)

        // *** End programmer edit section *** (ХрДок CustomMembers)

        
        /// <summary>
        /// ДатаСохранения.
        /// </summary>
        // *** Start programmer edit section *** (ХрДок.ДатаСохранения CustomAttributes)

        // *** End programmer edit section *** (ХрДок.ДатаСохранения CustomAttributes)
        public virtual System.DateTime ДатаСохранения
        {
            get
            {
                // *** Start programmer edit section *** (ХрДок.ДатаСохранения Get start)

                // *** End programmer edit section *** (ХрДок.ДатаСохранения Get start)
                System.DateTime result = this.fДатаСохранения;
                // *** Start programmer edit section *** (ХрДок.ДатаСохранения Get end)

                // *** End programmer edit section *** (ХрДок.ДатаСохранения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ХрДок.ДатаСохранения Set start)

                // *** End programmer edit section *** (ХрДок.ДатаСохранения Set start)
                this.fДатаСохранения = value;
                // *** Start programmer edit section *** (ХрДок.ДатаСохранения Set end)

                // *** End programmer edit section *** (ХрДок.ДатаСохранения Set end)
            }
        }
        
        /// <summary>
        /// Хр док.
        /// </summary>
        // *** Start programmer edit section *** (ХрДок.ТЧСоздДок CustomAttributes)

        // *** End programmer edit section *** (ХрДок.ТЧСоздДок CustomAttributes)
        public virtual IIS.DokumentooborotKR.DetailArrayOfТЧСоздДок ТЧСоздДок
        {
            get
            {
                // *** Start programmer edit section *** (ХрДок.ТЧСоздДок Get start)

                // *** End programmer edit section *** (ХрДок.ТЧСоздДок Get start)
                if ((this.fТЧСоздДок == null))
                {
                    this.fТЧСоздДок = new IIS.DokumentooborotKR.DetailArrayOfТЧСоздДок(this);
                }
                IIS.DokumentooborotKR.DetailArrayOfТЧСоздДок result = this.fТЧСоздДок;
                // *** Start programmer edit section *** (ХрДок.ТЧСоздДок Get end)

                // *** End programmer edit section *** (ХрДок.ТЧСоздДок Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ХрДок.ТЧСоздДок Set start)

                // *** End programmer edit section *** (ХрДок.ТЧСоздДок Set start)
                this.fТЧСоздДок = value;
                // *** Start programmer edit section *** (ХрДок.ТЧСоздДок Set end)

                // *** End programmer edit section *** (ХрДок.ТЧСоздДок Set end)
            }
        }
        
        /// <summary>
        /// Хр док.
        /// </summary>
        // *** Start programmer edit section *** (ХрДок.ТЧУтвержДок CustomAttributes)

        // *** End programmer edit section *** (ХрДок.ТЧУтвержДок CustomAttributes)
        public virtual IIS.DokumentooborotKR.DetailArrayOfТЧУтвержДок ТЧУтвержДок
        {
            get
            {
                // *** Start programmer edit section *** (ХрДок.ТЧУтвержДок Get start)

                // *** End programmer edit section *** (ХрДок.ТЧУтвержДок Get start)
                if ((this.fТЧУтвержДок == null))
                {
                    this.fТЧУтвержДок = new IIS.DokumentooborotKR.DetailArrayOfТЧУтвержДок(this);
                }
                IIS.DokumentooborotKR.DetailArrayOfТЧУтвержДок result = this.fТЧУтвержДок;
                // *** Start programmer edit section *** (ХрДок.ТЧУтвержДок Get end)

                // *** End programmer edit section *** (ХрДок.ТЧУтвержДок Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ХрДок.ТЧУтвержДок Set start)

                // *** End programmer edit section *** (ХрДок.ТЧУтвержДок Set start)
                this.fТЧУтвержДок = value;
                // *** Start programmer edit section *** (ХрДок.ТЧУтвержДок Set end)

                // *** End programmer edit section *** (ХрДок.ТЧУтвержДок Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ХрДокE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ХрДокE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ХрДокE", typeof(IIS.DokumentooborotKR.ХрДок));
                }
            }
            
            /// <summary>
            /// "ХрДокL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ХрДокL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ХрДокL", typeof(IIS.DokumentooborotKR.ХрДок));
                }
            }
        }
    }
}
