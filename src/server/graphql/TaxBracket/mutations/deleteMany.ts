import { mutationField, nonNull } from 'nexus'

export const TaxBracketDeleteManyMutation = mutationField(
  'deleteManyTaxBracket',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'TaxBracketWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.taxBracket.deleteMany({ where } as any)
    },
  },
)
