import { mutationField, nonNull } from 'nexus'

export const CampaignMemberDeleteManyMutation = mutationField(
  'deleteManyCampaignMember',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CampaignMemberWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.campaignMember.deleteMany({ where } as any)
    },
  },
)
