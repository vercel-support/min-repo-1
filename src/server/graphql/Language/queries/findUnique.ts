import { queryField, nonNull } from 'nexus'

export const LanguageFindUniqueQuery = queryField('findUniqueLanguage', {
  type: 'Language',
  args: {
    where: nonNull('LanguageWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.language.findUnique({
      where,
      ...select,
    })
  },
})
