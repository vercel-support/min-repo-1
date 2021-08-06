import { mutationField, nonNull } from 'nexus'

export const TaxBracketDeleteOneMutation = mutationField(
  'deleteOneTaxBracket',
  {
    type: 'TaxBracket',
    args: {
      where: nonNull('TaxBracketWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.taxBracket.delete({
        where,
        ...select,
      })
    },
  },
)
