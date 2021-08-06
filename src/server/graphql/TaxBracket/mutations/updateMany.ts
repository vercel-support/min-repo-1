import { mutationField, nonNull } from 'nexus'

export const TaxBracketUpdateManyMutation = mutationField(
  'updateManyTaxBracket',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'TaxBracketWhereInput',
      data: nonNull('TaxBracketUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.taxBracket.updateMany(args as any)
    },
  },
)
