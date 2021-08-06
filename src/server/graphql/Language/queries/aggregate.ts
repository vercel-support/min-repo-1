import { queryField, list } from 'nexus'

export const LanguageAggregateQuery = queryField('aggregateLanguage', {
  type: 'AggregateLanguage',
  args: {
    where: 'LanguageWhereInput',
    orderBy: list('LanguageOrderByInput'),
    cursor: 'LanguageWhereUniqueInput',
    distinct: 'LanguageScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.language.aggregate({ ...args, ...select }) as any
  },
})
