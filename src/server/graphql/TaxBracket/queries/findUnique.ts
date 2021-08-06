import { queryField, nonNull } from 'nexus'

export const TaxBracketFindUniqueQuery = queryField('findUniqueTaxBracket', {
  type: 'TaxBracket',
  args: {
    where: nonNull('TaxBracketWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.taxBracket.findUnique({
      where,
      ...select,
    })
  },
})
