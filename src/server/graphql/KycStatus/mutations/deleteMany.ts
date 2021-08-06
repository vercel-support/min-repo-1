import { mutationField, nonNull } from 'nexus'

export const KycStatusDeleteManyMutation = mutationField(
  'deleteManyKycStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'KycStatusWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.kycStatus.deleteMany({ where } as any)
    },
  },
)
