import { queryField, nonNull, list } from 'nexus'

export const LanguageFindCountQuery = queryField('findManyLanguageCount', {
  type: nonNull('Int'),
  args: {
    where: 'LanguageWhereInput',
    orderBy: list('LanguageOrderByInput'),
    cursor: 'LanguageWhereUniqueInput',
    distinct: 'LanguageScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.language.count(args as any)
  },
})
