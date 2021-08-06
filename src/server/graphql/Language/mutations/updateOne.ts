import { mutationField, nonNull } from 'nexus'

export const LanguageUpdateOneMutation = mutationField('updateOneLanguage', {
  type: nonNull('Language'),
  args: {
    where: nonNull('LanguageWhereUniqueInput'),
    data: nonNull('LanguageUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.language.update({
      where,
      data,
      ...select,
    })
  },
})
