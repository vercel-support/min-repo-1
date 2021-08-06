import { mutationField, nonNull } from 'nexus'

export const LanguageDeleteOneMutation = mutationField('deleteOneLanguage', {
  type: 'Language',
  args: {
    where: nonNull('LanguageWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.language.delete({
      where,
      ...select,
    })
  },
})
