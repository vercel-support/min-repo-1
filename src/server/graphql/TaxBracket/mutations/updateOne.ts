import { mutationField, nonNull } from 'nexus'

export const TaxBracketUpdateOneMutation = mutationField(
  'updateOneTaxBracket',
  {
    type: nonNull('TaxBracket'),
    args: {
      where: nonNull('TaxBracketWhereUniqueInput'),
      data: nonNull('TaxBracketUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.taxBracket.update({
        where,
        data,
        ...select,
      })
    },
  },
)
