import { queryField, nonNull, list } from 'nexus'

export const LanguageFindManyQuery = queryField('findManyLanguage', {
  type: nonNull(list(nonNull('Language'))),
  args: {
    where: 'LanguageWhereInput',
    orderBy: list('LanguageOrderByInput'),
    cursor: 'LanguageWhereUniqueInput',
    distinct: 'LanguageScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.language.findMany({
      ...args,
      ...select,
    })
  },
})
