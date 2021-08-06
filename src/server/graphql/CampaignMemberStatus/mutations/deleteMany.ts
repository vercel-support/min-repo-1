import { mutationField, nonNull } from 'nexus'

export const CampaignMemberStatusDeleteManyMutation = mutationField(
  'deleteManyCampaignMemberStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CampaignMemberStatusWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.campaignMemberStatus.deleteMany({ where } as any)
    },
  },
)
