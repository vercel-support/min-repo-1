import { queryField, list } from 'nexus'

export const LanguageFindFirstQuery = queryField('findFirstLanguage', {
  type: 'Language',
  args: {
    where: 'LanguageWhereInput',
    orderBy: list('LanguageOrderByInput'),
    cursor: 'LanguageWhereUniqueInput',
    distinct: 'LanguageScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.language.findFirst({
      ...args,
      ...select,
    })
  },
})
